function toggleStep(stepNumber) {
    const content = document.getElementById(`step${stepNumber}`);

    // Закрываем все step-content перед открытием нового
    document.querySelectorAll(".step-content").forEach(item => {
        if (item !== content) item.style.display = "none";
    });

    // Переключаем видимость текущего элемента
    content.style.display = (content.style.display === "block") ? "none" : "block";
}