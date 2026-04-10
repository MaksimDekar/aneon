param(
  [Parameter(Mandatory = $true)]
  [string]$RemoteUrl,
  [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  throw "Git не установлен. Установите Git и повторите запуск скрипта."
}

if (-not (Test-Path -LiteralPath ".git")) {
  git init
}

$existingRemote = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0 -and $existingRemote) {
  git remote set-url origin $RemoteUrl
} else {
  git remote add origin $RemoteUrl
}

git add .
git commit -m "Initial commit" 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Пропускаю initial commit: возможно, нет новых изменений."
}

$hookDir = ".git/hooks"
if (-not (Test-Path -LiteralPath $hookDir)) {
  New-Item -ItemType Directory -Path $hookDir | Out-Null
}

$hookPath = Join-Path $hookDir "post-commit"
$hookScript = @"
#!/bin/sh
branch=\$(git rev-parse --abbrev-ref HEAD)
git push origin "\$branch"
"@

Set-Content -LiteralPath $hookPath -Value $hookScript -NoNewline

git branch -M $Branch
git push -u origin $Branch

Write-Host "Готово: origin настроен, начальный push выполнен, автопуш включен через post-commit hook."

