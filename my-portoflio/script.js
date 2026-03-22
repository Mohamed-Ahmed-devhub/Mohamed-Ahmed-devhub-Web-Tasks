document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1800,
            once: true,
            offset: 100,
            easing: 'ease-out-quart',
        });
    }

    const textElement = document.querySelector(".content-box h1 span");
    if (textElement && !window.hasStartedTyping) {
        window.hasStartedTyping = true;
        const text = "Digital Art";
        let index = 0;
        textElement.textContent = ""; 

        function typeEffect() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 150);
            }
        }
        setTimeout(typeEffect, 1000);
    }

    if (typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "#particles-js",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x1e3a8a,
            backgroundColor: 0x050505,
            points: 8.00,
            maxDistance: 15.00,
            spacing: 20.00,
            showDots: true
        });
    }

    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".visual-box, .node"), {
            max: 15,
            speed: 1000,
            glare: false,
            "full-page-listening": false,
            scale: 1,
            reset: true,
        });
    }

    if (typeof emailjs !== 'undefined') {
        emailjs.init("r0hEdpoF7-P7ukGGs"); 
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault(); 
                const btn = contactForm.querySelector('button');
                const btnSpan = btn.querySelector('span') || btn;
                btn.disabled = true;
                const originalText = btnSpan.innerText;
                btnSpan.innerText = "Sending Proposal... 🚀";

                emailjs.sendForm('service_97usb9a', 'template_cfdpqpf', contactForm)
                    .then(function() {
                        alert("Done! Your message reached Mohamed. ✅");
                        btn.disabled = false;
                        btnSpan.innerText = originalText;
                        contactForm.reset();
                    }, function(error) {
                        alert("Oops! Something went wrong.");
                        btn.disabled = false;
                        btnSpan.innerText = originalText;
                    });
            });
        }
    }
});







document.addEventListener('DOMContentLoaded', function() {
    // 1. الترحيب الفخم جداً (SweetAlert2 Custom)
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: '✨ Welcome to Mohamed\'s Universe',
            html: '<b>Digital Artist & Full-Stack Developer</b><br>Are you ready to explore the future of Tech?',
            iconHtml: '🚀',
            background: '#050505',
            color: '#fff',
            confirmButtonText: 'Let\'s Dive In! ⚡',
            confirmButtonColor: '#1e3a8a',
            allowOutsideClick: false,
            allowEscapeKey: false,
            padding: '3em',
            backdrop: `rgba(0,0,123,0.4)`,
            customClass: {
                popup: 'my-custom-popup',
                title: 'my-custom-title',
                confirmButton: 'my-custom-button'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // مش هيشتغل غير لما يدوس أوك
                startSiteMagic();
            }
        });
    }

    function startSiteMagic() {
        // أ. تشغيل الكتابة (TypeEffect)
        const textElement = document.querySelector(".content-box h1 span");
        if (textElement) {
            const text = "Digital Art";
            let index = 0;
            textElement.textContent = ""; 
            function type() {
                if (index < text.length) {
                    textElement.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, 150);
                }
            }
            setTimeout(type, 500);
        }

        // ب. تشغيل المهارات (واحدة ورا التانية)
        const skillBars = document.querySelectorAll('.skill-per');
        skillBars.forEach((bar, i) => {
            setTimeout(() => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            }, i * 300); // كل واحدة تتأخر عن اللي قبلها 300 مللي ثانية
        });

        // ج. تشغيل الـ Vanta (الشبكة)
        if (typeof VANTA !== 'undefined') {
            VANTA.NET({
                el: "#particles-js",
                mouseControls: true,
                touchControls: true,
                color: 0x1e3a8a,
                backgroundColor: 0x050505,
                points: 8.00,
                maxDistance: 15.00,
                spacing: 20.00
            });
        }
    }
});