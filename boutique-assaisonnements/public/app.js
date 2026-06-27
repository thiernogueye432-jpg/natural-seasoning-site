let panier = [];

// Charger les produits dès l'ouverture du site
document.addEventListener('DOMContentLoaded', () => {
    chargerProduits();
});

function chargerProduits() {
    fetch('http://localhost:3000/api/produits')
        .then(response => response.json())
        .then(produits => afficherProduits(produits))
        .catch(error => {
            console.error("Erreur de chargement de l'API:", error);
            document.getElementById('grille-produits').innerHTML = `<p class="text-red-500 col-span-3 text-center font-medium">Erreur : Lancez bien votre commande 'node server.js' dans le terminal.</p>`;
        });
}

function afficherProduits(produits) {
    const grille = document.getElementById('grille-produits');
    grille.innerHTML = ''; 

    produits.forEach(produit => {
        const carte = document.createElement('div');
        // MODIFIEZ UNIQUEMENT CETTE LIGNE DANS LA FONCTION :
carte.className = 'carte-produit';

        
        carte.innerHTML = `
            <div>
                <div class="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-2xl mb-4">🌿</div>
                <h4 class="text-lg font-bold text-stone-900 mb-1">${produit.nom}</h4>
                <p class="text-stone-500 text-xs line-clamp-3 mb-4">${produit.description}</p>
            </div>
            <div class="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                <div>
                    <span class="block text-xl font-extrabold text-[#8c3523]">${produit.prix} FCFA</span>
                    <span class="text-[10px] text-emerald-600 font-semibold uppercase bg-emerald-50 px-2 py-0.5 rounded">En Stock</span>
                </div>
                <button onclick="ajouterAuPanier(${produit.id}, '${produit.nom.replace(/'/g, "\\'")}', ${produit.prix})" 
                        class="bg-[#8c3523] hover:bg-[#732a1b] text-white font-semibold text-xs py-2.5 px-4 rounded transition-colors uppercase tracking-wider shadow-sm">
                    Ajouter
                </button>
            </div>
        `;
        grille.appendChild(carte);
    });
}

function ajouterAuPanier(id, nom, prix) {
    const articleExistant = panier.find(item => item.id === id);
    if (articleExistant) {
        articleExistant.quantite += 1;
    } else {
        panier.push({ id: id, nom: nom, prix: prix, quantite: 1 });
    }
    mettreAJourPanierVisual();
    if (!document.getElementById('section-commande').classList.contains('hidden')) {
        afficherDetailsPanier();
    }
}

function mettreAJourPanierVisual() {
    const compteur = document.getElementById('compteur-panier');
    const totalArticles = panier.reduce((total, item) => total + item.quantite, 0);
    compteur.textContent = totalArticles;
}

function ouvrirPanier() {
    const section = document.getElementById('section-commande');
    section.classList.remove('hidden');
    section.scrollIntoView({ behavior: 'smooth' });
    afficherDetailsPanier();
}

function fermerPanier() {
    document.getElementById('section-commande').classList.add('hidden');
}

function afficherDetailsPanier() {
    const conteneurDetails = document.getElementById('details-panier');
    if (!conteneurDetails) return;
    
    if (panier.length === 0) {
        conteneurDetails.innerHTML = `<p style="text-align: center; color: #a8a29e; font-style: italic; py-4">Votre panier est vide.</p>`;
        return;
    }

    let html = '<div style="border-bottom: 1px solid #e7e5e4; padding-bottom: 1rem; margin-bottom: 1rem;">';
    let grandTotal = 0;

    panier.forEach(item => {
        let totalLigne = item.prix * item.quantite;
        grandTotal += totalLigne;
        html += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.9rem;">
                <span><strong>${item.nom}</strong> (x${item.quantite})</span>
                <span style="font-weight: 700;">${totalLigne} FCFA</span>
            </div>
        `;
    });

    html += `</div>`;
    html += `
        <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; color: #8c3523; margin-bottom: 1.5rem;">
            <span>TOTAL À REGLER :</span>
            <span>${grandTotal} FCFA</span>
        </div>
    `;
    
    conteneurDetails.innerHTML = html;
}
function afficherDetailsPanier() {
    const conteneurDetails = document.getElementById('details-panier');
    if (!conteneurDetails) return;
    
    if (panier.length === 0) {
        conteneurDetails.innerHTML = `<p style="text-align: center; color: #a8a29e; font-style: italic; py-4">Votre panier est vide.</p>`;
        return;
    }

    let html = '<div style="border-bottom: 1px solid #e7e5e4; padding-bottom: 1rem; margin-bottom: 1rem;">';
    let grandTotal = 0;

    panier.forEach(item => {
        let totalLigne = item.prix * item.quantite;
        grandTotal += totalLigne;
        html += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.9rem;">
                <span><strong>${item.nom}</strong> (x${item.quantite})</span>
                <span style="font-weight: 700;">${totalLigne} FCFA</span>
            </div>
        `;
    });

    html += `</div>`;
    html += `
        <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; color: #8c3523; margin-bottom: 1.5rem;">
            <span>TOTAL À REGLER :</span>
            <span>${grandTotal} FCFA</span>
        </div>
    `;
    
    conteneurDetails.innerHTML = html;
}


// ACTION FINALE SÉCURISÉE VERS VOTRE NUMÉRO
function envoyerCommandeWhatsApp() {
    const nom = document.getElementById('client-nom').value.trim();
    const tel = document.getElementById('client-tel').value.trim();
    const adresse = document.getElementById('client-adresse').value.trim();

    if (panier.length === 0) {
        alert("Votre panier est vide ! Ajoutez des assaisonnements NOKOSS.");
        return;
    }
    if (!nom || !tel || !adresse) {
        alert("Veuillez renseigner votre Nom, Téléphone et Adresse pour la livraison.");
        return;
    }

    let message = `🌿 *NOUVELLE COMMANDE - SÉN UNIVERSAL NOKOSS*\n\n`;
    message += `👤 *Client :* ${nom}\n`;
    message += `📞 *Téléphone :* ${tel}\n`;
    message += `📍 *Livraison :* ${adresse}\n\n`;
    message += `📦 *Détails de la commande :*\n`;

    let grandTotal = 0;
    panier.forEach(item => {
        let totalLigne = item.prix * item.quantite;
        grandTotal += totalLigne;
        message += `• ${item.nom} (x${item.quantite}) : *${totalLigne} FCFA*\n`;
    });

    message += `\n💰 *TOTAL COMMANDE : ${grandTotal} FCFA*`;

    // Numéro officiel de El Hadji Thierno GUEYE (extrait de votre v0)
    const numeroWhatsApp = "221778955343"; 
    
    // Redirection directe
    window.location.href = `https://wa.me{numeroWhatsApp}?text=${encodeURIComponent(message)}`;
}
