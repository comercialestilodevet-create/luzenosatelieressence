/* =========================================================
   LUZ & NÓS — ATELIER ESSENCE
   SCRIPT.JS
========================================================= */


document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });


        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");
                menuToggle.classList.remove("active");

            });

        });

    }


    /* =====================================================
       FAQ
    ===================================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");


            /* Fecha todos */
            faqItems.forEach(faq => {
                faq.classList.remove("active");
            });


            /* Abre apenas o selecionado */
            if (!isActive) {
                item.classList.add("active");
            }

        });

    });


    /* =====================================================
       ANO AUTOMÁTICO NO RODAPÉ
    ===================================================== */

    const currentYear = document.getElementById("current-year");

    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }


    /* =====================================================
       HEADER AO ROLAR A PÁGINA
    ===================================================== */

    const header = document.getElementById("header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {

                header.style.boxShadow =
                    "0 10px 35px rgba(74, 45, 30, 0.08)";

            } else {

                header.style.boxShadow = "none";

            }

        });

    }


    /* =====================================================
       SCROLL SUAVE PARA LINKS INTERNOS
    ===================================================== */

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (
                targetId === "#" ||
                targetId.length <= 1
            ) {
                return;
            }


            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                const headerHeight =
                    header ? header.offsetHeight : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;


                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }

        });

    });


    /* =====================================================
       ANIMAÇÃO SUAVE AO APARECER NA TELA
    ===================================================== */

    const animatedElements = document.querySelectorAll(
        ".product-card, .collection-card, .testimonial-card, .step, .benefit"
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


        animatedElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    } else {

        animatedElements.forEach(element => {

            element.classList.add("visible");

        });

    }

});
