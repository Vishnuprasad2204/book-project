document.querySelectorAll(".star-rating").forEach((container, cardIndex) => {
    const stars = container.querySelectorAll('input[type="radio"]');

    stars.forEach(star => {
        star.addEventListener("change", () => {
            const ratingValue = star.value;
            console.log(`Card ${cardIndex + 1} rated ${ratingValue} stars`);
        });
    });
});
