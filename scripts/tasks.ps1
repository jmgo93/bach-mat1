param(
    [Parameter(Mandatory = $true)]
    [ValidateSet("audit", "student", "teacher", "answers", "contextplan", "examplan", "supplements", "contextbook", "exambook", "supplementbooks", "webcontent", "visualqa", "qa", "all", "clean")]
    [string]$Task
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$buildDir = Join-Path $root "build"

function Invoke-Audit {
    Write-Host "==> Auditoria de fuentes"
    & python (Join-Path $root "scripts\\audit_sources.py")
    if ($LASTEXITCODE -ne 0) {
        throw "Auditoria fallida"
    }
}

function Invoke-Phase2 {
    Write-Host "==> Taxonomia y cobertura"
    & python (Join-Path $root "scripts\\build_phase2_outputs.py")
    if ($LASTEXITCODE -ne 0) {
        throw "Generacion de taxonomia y cobertura fallida"
    }
}

function Invoke-Validation {
    Write-Host "==> Validacion matematica"
    & python (Join-Path $root "scripts\\validate_math.py")
    if ($LASTEXITCODE -ne 0) {
        throw "Validacion matematica fallida"
    }
}

function Invoke-SupplementBlueprints {
    Write-Host "==> Generacion de suplementos"
    & python (Join-Path $root "scripts\\generate_supplement_blueprints.py")
    if ($LASTEXITCODE -ne 0) {
        throw "Generacion de suplementos fallida"
    }
}

function Invoke-WebContent {
    Write-Host "==> Generacion de contenido web"
    & python (Join-Path $root "scripts\\build_web_content.py")
    if ($LASTEXITCODE -ne 0) {
        throw "Generacion de contenido web fallida"
    }
}

function Invoke-LatexBuild {
    param(
        [Parameter(Mandatory = $true)]
        [string]$MainFile,
        [Parameter(Mandatory = $true)]
        [string]$JobName
    )

    $mainPath = Join-Path $root $MainFile
    New-Item -ItemType Directory -Path $buildDir -Force | Out-Null

    $engine = "pdflatex"

    foreach ($pass in 1..2) {
        Write-Host "==> Compilacion $JobName (pasada $pass)"
        & $engine "-interaction=nonstopmode" "-halt-on-error" "-file-line-error" "-output-directory=$buildDir" "-jobname=$JobName" $mainPath
        if ($LASTEXITCODE -ne 0) {
            throw "Compilacion fallida para $JobName"
        }
    }
}

function Invoke-QA {
    Write-Host "==> QA"
    Invoke-Validation
    & python -m unittest discover -s (Join-Path $root "tests") -p "test_*.py"
    if ($LASTEXITCODE -ne 0) {
        throw "QA fallida"
    }
}

function Invoke-VisualQA {
    Write-Host "==> Auditoria visual"
    & python (Join-Path $root "scripts\\render_visual_audit.py")
    if ($LASTEXITCODE -ne 0) {
        throw "Auditoria visual fallida"
    }
}

function Invoke-Clean {
    Write-Host "==> Limpieza"
    if (Test-Path $buildDir) {
        Get-ChildItem -Path $buildDir -Force | Remove-Item -Recurse -Force
    }
}

switch ($Task) {
    "audit" {
        Invoke-Audit
    }
    "student" {
        Invoke-LatexBuild -MainFile "tex/main_student.tex" -JobName "cuaderno_estudiante"
    }
    "teacher" {
        Invoke-LatexBuild -MainFile "tex/main_teacher.tex" -JobName "cuaderno_profesor"
    }
    "answers" {
        Invoke-LatexBuild -MainFile "tex/main_answers.tex" -JobName "respuestas_breves"
    }
    "contextplan" {
        Invoke-SupplementBlueprints
        Invoke-LatexBuild -MainFile "tex/main_contextual_plan.tex" -JobName "proyecto_problemas_contextualizados"
    }
    "examplan" {
        Invoke-SupplementBlueprints
        Invoke-LatexBuild -MainFile "tex/main_exams_plan.tex" -JobName "proyecto_examenes_dificiles"
    }
    "supplements" {
        Invoke-SupplementBlueprints
        Invoke-LatexBuild -MainFile "tex/main_contextual_plan.tex" -JobName "proyecto_problemas_contextualizados"
        Invoke-LatexBuild -MainFile "tex/main_exams_plan.tex" -JobName "proyecto_examenes_dificiles"
    }
    "contextbook" {
        Invoke-SupplementBlueprints
        Invoke-LatexBuild -MainFile "tex/main_contextual_book.tex" -JobName "cuaderno_problemas_contextualizados"
    }
    "exambook" {
        Invoke-SupplementBlueprints
        Invoke-LatexBuild -MainFile "tex/main_exams_book.tex" -JobName "cuaderno_examenes_dificiles"
    }
    "supplementbooks" {
        Invoke-SupplementBlueprints
        Invoke-LatexBuild -MainFile "tex/main_contextual_book.tex" -JobName "cuaderno_problemas_contextualizados"
        Invoke-LatexBuild -MainFile "tex/main_exams_book.tex" -JobName "cuaderno_examenes_dificiles"
    }
    "webcontent" {
        Invoke-WebContent
    }
    "qa" {
        Invoke-QA
    }
    "visualqa" {
        Invoke-VisualQA
    }
    "all" {
        Invoke-Audit
        Invoke-Phase2
        Invoke-LatexBuild -MainFile "tex/main_student.tex" -JobName "cuaderno_estudiante"
        Invoke-LatexBuild -MainFile "tex/main_teacher.tex" -JobName "cuaderno_profesor"
        Invoke-LatexBuild -MainFile "tex/main_answers.tex" -JobName "respuestas_breves"
        Invoke-VisualQA
        Invoke-QA
    }
    "clean" {
        Invoke-Clean
    }
}
