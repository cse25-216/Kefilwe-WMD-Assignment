// ── HAMBURGER MENU ──
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        nav.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('open');
            nav.classList.remove('open');
        });
    });
}

// ── VERIFY LICENSE BUTTONS ──
const verifyButtons = document.querySelectorAll('.institution-card button');

verifyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const card = button.closest('.institution-card');
        const name = card.querySelector('h2').textContent;
        const category = card.querySelectorAll('p')[0].textContent;
        const status = card.querySelectorAll('p')[1].textContent;

        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.6);
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        `;

        // Create modal box
        overlay.innerHTML = `
            <div style="
                background: #1a4a41;
                border: 1.5px solid rgba(255,255,255,0.2);
                border-radius: 16px;
                padding: 2rem;
                max-width: 400px;
                width: 100%;
                text-align: center;
                font-family: 'Be Vietnam Pro', sans-serif;
                color: #ffffff;
            ">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">✅</div>
                <h2 style="
                    font-family: 'Montserrat', sans-serif;
                    color: #f5e6a3;
                    font-size: 1.1rem;
                    margin-bottom: 1.2rem;
                ">License Verified</h2>
                <p style="margin-bottom: 0.5rem;"><strong style="color:#f5e6a3;">Institution:</strong> ${name}</p>
                <p style="margin-bottom: 0.5rem;"><strong style="color:#f5e6a3;">${category}</strong></p>
                <p style="margin-bottom: 1.5rem;"><strong style="color:#f5e6a3;">${status}</strong></p>
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7); margin-bottom: 1.5rem;">
                    This institution is registered and licensed by NBFIRA to operate in Botswana.
                </p>
                <button id="closeModal" style="
                    background: #f5e6a3;
                    color: #1a4a41;
                    border: none;
                    border-radius: 8px;
                    padding: 0.6rem 1.8rem;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 700;
                    font-size: 0.9rem;
                    cursor: pointer;
                ">Close</button>
            </div>
        `;

        document.body.appendChild(overlay);

        // Close modal on button click
        overlay.querySelector('#closeModal').addEventListener('click', function () {
            document.body.removeChild(overlay);
        });

        // Close modal on overlay click
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    });
});