const sidebare = document.createElement('div')
sidebare.innerHTML = `
 <nav class="sidebar fixed w-64 bg-orange-50 h-screen shadow-md flex flex-col" id="sidebar">
        <div class="logo p-5 border-b border-gray-200">
            <h1 class="sidebar-text text-2xl font-bold text-gray-500">RH Dashboard</h1>
        </div>

        <div  class="userInfo p-5 border-b border-gray-200 flex flex-col items-center">
            <img src="https://placehold.co/80x80/ff8904/FFFFFF?text=KM" alt="Photo profil"
             class="rounded-full w-20 h-20 mb-3">
            <h3 class="sidebar-text font-semibold text-orange-400">Karthi Modesh</h3>
            <h4 class=" text-sm text-gray-500">User</h4>
        </div>

        <ul class="p-3 flex-1">
          <li class="mb-2">
                <a href="index.html" class="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <i class="fas fa-chart-bar mr-3"></i>
                    <span class="sidebar-text">Tableau de bord</span>
                </a>
            </li>
            <li class="mb-2">
                <a href="list_leaves.html" class="flex items-center p-3 text-gray-600  hover:bg-gray-100 rounded-lg">
                    <i class="fas fa-list mr-3"></i>
                    <span class="sidebar-text">Mes congés</span>
                </a>
            </li>
            <li class="mb-2">
                <a href="add_leave.html" class="flex items-center p-3  text-gray-600 hover:bg-gray-100  rounded-lg">
                    <i class="fas fa-plus mr-3"></i>
                    <span class="sidebar-text">Demande de congé</span>
                </a>
            </li>
            <li class="mb-2">
                <a href="admin.html" class="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <i class="fas fa-cog mr-3"></i>
                    <span class="sidebar-text">Administration</span>
                </a>
            </li>
          
        </ul>

        <div class="p-5 border-t border-gray-200">
            <a href="#" class="flex items-center p-3 text-gray-600 hover:bg-red-50 rounded-lg">
                <i class="fas fa-sign-out-alt mr-3"></i>
                <span class="sidebar-text">Déconnexion</span>
            </a>
        </div>
    </nav>
    <header id="mainContent" class="mainContent flex ml-64 justify-between bg-white p-2 mb-1 ">

        <div class=" flex space-x-3" >
            <button id="toggleBtn" class="text-gray-400 hover:text-gray-700">
                <i class="fas fa-angle-left"></i>
            </button>
        </div>

        <div class="relative w-full lg:w-64">
                                <input type="text" id="searchInput" placeholder="Rechercher un congé..." class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                                <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                            </div>

 
            <div class="relative" id="notificationButton">
                <button class="w-12 h-12 flex items-center justify-center">
                    <i class="fas fa-bell text-gray-500 text-xl"></i>
                    <span class="notification-dot absolute mt-2 mr-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"></span>
                </button>
            </div>
        </div>
        
        <div id="notificationPanel" class="fixed top-20 right-4 w-80 bg-white rounded-xl shadow-2xl z-50 transform scale-95 opacity-0 pointer-events-none transition-all duration-300 overflow-hidden">
            <div class="p-4 border-b border-gray-200">
                <h3 class="font-semibold text-gray-800 text-lg">Notifications</h3>
            </div>
            <div class="max-h-96 overflow-y-auto" id="notificationList">
         
            </div>
            <div class="p-3 border-t border-gray-200 text-center">
                <button id="markAllRead" class="text-blue-500 text-sm font-medium hover:text-blue-700 transition-colors">Mark all as read</button>
            </div>
      
    </header>

`
// FOOTER
const footer = document.createElement('div')
footer.innerHTML = `
 <footer id="mainContent" class="mainContent bg-orange-50 text-gray-600 ml-64">
        <div class="container px-4 py-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Contact RH -->
                <div>
                    <h3 class="text-lg font-semibold mb-4 flex items-center">
                        <i class="fas fa-headset mr-2 text-orange-400"></i> Contact RH
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex items-center">
                            <i class="fas fa-envelope text-orange-400 mr-3 w-5"></i>
                            <a href="mailto:rh@entreprise.com" class="footer-link">rh@entreprise.com</a>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-phone text-orange-400 mr-3 w-5"></i>
                            <a href="tel:+33123456789" class="footer-link">+33 1 23 45 67 89</a>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-clock text-orange-400 mr-3 w-5"></i>
                            <span>Lun-Ven 9h-17h</span>
                        </li>
                    </ul>
                </div>

                <!-- Adresse -->
                <div>
                    <h3 class="text-lg font-semibold mb-4 flex items-center">
                        <i class="fas fa-map-marker-alt mr-2 text-orange-400"></i> Adresse
                    </h3>
                    <address class="not-italic">
                        <p class="flex items-start mb-2">
                            <i class="fas fa-building text-orange-400 mr-3 mt-1 w-5"></i>
                            <span>123 Rue de l'Entreprise<br>75001 Paris, France</span>
                        </p>
                    </address>
                </div>

                <!-- Liens utiles -->
                <div>
                    <h3 class="text-lg font-semibold mb-4 flex items-center">
                        <i class="fas fa-link mr-2 text-orange-400"></i> Liens utiles
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex items-center">
                            <i class="fas fa-chevron-right text-orange-400 text-xs mr-3 w-5"></i>
                            <a href="#" class="footer-link">Politique de congés</a>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-chevron-right text-orange-400 text-xs mr-3 w-5"></i>
                            <a href="#" class="footer-link">Guide employé</a>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-chevron-right text-orange-400 text-xs mr-3 w-5"></i>
                            <a href="#" class="footer-link">Support technique</a>
                        </li>
                    </ul>
                </div>

                <!-- Assistance -->
                <div>
                    <h3 class="text-lg font-semibold mb-4 flex items-center">
                        <i class="fas fa-hands-helping mr-2 text-orange-400"></i> Assistance
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex items-center">
                            <i class="fas fa-chevron-right text-orange-400 text-xs mr-3 w-5"></i>
                            <a href="#" class="footer-link">Centre d'aide</a>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-chevron-right text-orange-400 text-xs mr-3 w-5"></i>
                            <a href="#" class="footer-link">FAQ</a>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-chevron-right text-orange-400 text-xs mr-3 w-5"></i>
                            <a href="#" class="footer-link">Signaler un problème</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-2 pt-2 text-center text-gray-400">
                <p>© 2025 Entreprise. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
    `
const body = document.querySelector('body')
const main = document.querySelector('main')
body.prepend(sidebare)
body.append(footer)

// SIDBAR TOGGLE

const sidebar = document.getElementById("sidebar")
const mainContent = document.querySelectorAll(".mainContent")
const toggleBtn = document.getElementById("toggleBtn")
const sidebarLinks = document.querySelectorAll(".sidebar-text")

let isCollapsed = false

toggleBtn.addEventListener("click", () => {
    isCollapsed = !isCollapsed

    if (isCollapsed) {
        sidebar.classList.replace("w-64", "w-20")
        mainContent.forEach(el => {
            el.classList.replace("ml-64", "ml-20")
        })
        sidebarLinks.forEach(el => el.classList.add("hidden"))
        toggleBtn.innerHTML = `<i class="fas fa-angle-right"></i>`
    } else {
        sidebar.classList.replace("w-20", "w-64")
        mainContent.forEach(el => {
            el.classList.replace("ml-20", "ml-64")
        })
        sidebarLinks.forEach(el => el.classList.remove("hidden"))
        toggleBtn.innerHTML = `<i class="fas fa-angle-left"></i>`
    }
})


sidebarLinks.forEach(el => {
    el.addEventListener('click', () => {
        sidebarLinks.forEach(link => link.classList.remove('active'));

        el.classList.add('active');
    });
});

// notif
function showSlide(index) {
    const carousel = document.getElementById('carousel');
    const translateValue = -index * 33.3333;
    carousel.style.transform = `translateX(${translateValue}%)`;


    const navDots = document.querySelectorAll('.carousel-nav');
    navDots.forEach((dot, i) => {
        if (i == index) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-blue-500');
        } else {
            dot.classList.remove('bg-blue-500');
            dot.classList.add('bg-gray-300');
        }
    });

}

const connected_user = 1;
let allCongesData = [];
// edit a conge
const congeForm = document.querySelector('#congeForm')
const editConge = async (congeId) => {
    modalOpen();
    try {
        const conge = await axios.get(`http://localhost:4000/conges/${congeId}`);

        if (!conge) {
            console.error("Congé introuvable !");
            return;
        }

        congeForm.congeId.value = congeId;
        congeForm.startDate.value = conge.data.date_debut;
        congeForm.endDate.value = conge.data.date_fin;
        congeForm.congeType.value = conge.data.type_conge;
        congeForm.justification.value = conge.data.justification;

    } catch (error) {
        console.error("Erreur lors de la modification:", error);
    }
};

// Modal modification
modalOpen = () => {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
    }
};

modalClose = () => {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'auto';
    }
};

// approuvé ou réfusé conge par admin
 approveConge = async (congeId) => {
    try {

        const resConge = await axios.get(`http://localhost:4000/conges/${congeId}`);
        const conge = resConge.data;

        const resEmp = await axios.get(`http://localhost:4000/employees/${conge.id_employee}`);
        let emp = resEmp.data;

        await axios.patch(`http://localhost:4000/conges/${congeId}`, {
            status_conge: "approuvé"
        });

        if (conge.type_conge !== "Congés maladie" && conge.status_conge == "approuvé" ) {
            let newSolde = emp.solde_conge - conge.duree;
            if (newSolde < 0) newSolde = 0;

            await axios.patch(`http://localhost:4000/employees/${emp.id}`, {
                solde_conge: newSolde
            });
        }

        alert("Congé approuvé et solde mis à jour !");
        afficherAllConges(); 
        afficheUserConges(connected_user); 

    } catch (err) {
        console.error("Erreur lors de l'approbation:", err);
    }
};
 

rejectConge = async (congeId) => {
    try {
        await axios.patch(`http://localhost:4000/conges/${congeId}`, {
            status_conge: "refusé"
        });

        // const notification = {
        //     id_employee: connected_user,
        //     id_notif: Math.floor(Math.random() * 20) + 1,
        //     message: `Votre congé (${conge.date_debut} au ${conge.date_fin}) a été rejecté.`,

        // }
        // await axios.post(`http://localhost:4000/notification`, notification)
        // loadNotifications()

        alert(" Congé refusé avec succès !");
        afficherAllConges();
        afficheUserConges(connected_user);
    } catch (err) {
        console.error("Erreur lors du refus:", err);
        alert("Erreur lors du refus du congé");
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const closeModalBtn = document.getElementById('closeModal');
    const cancelEditBtn = document.getElementById('cancelEdit');
    const modal = document.querySelector('.modal');

    if (closeModalBtn) closeModalBtn.addEventListener('click', modalClose);
    if (cancelEditBtn) cancelEditBtn.addEventListener('click', modalClose);

    // afficher les conges d'utilisateur connecté

    const afficheUserConges = async (id) => {
        try {
            const res = await axios.get(`http://localhost:4000/conges?id_employee=${id}`);
            const user = await axios.get(`http://localhost:4000/employees/${id}`);
            console.log(user.data)
            const userConges = res.data;
            const tableBody = document.querySelector(".show");
            
            if (!tableBody) return;

            tableBody.innerHTML = '';
            
            userConges.forEach(conge => {
                const row = document.createElement("tr");
                row.setAttribute("data-id", conge.id);
                row.classList.add("border-b", "border-gray-100");
                
                row.innerHTML = `
                <td class="p-3">${conge.type_conge}</td>
                <td class="p-3">
                ${conge.status_conge == "approuvé"
                        ? `<span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs status-badge">
                        <i class="fas fa-check mr-1"></i> Approuvé</span>`
                        : conge.status_conge == "refusé"
                            ? `<span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs status-badge">
                    <i class="fas fa-times mr-1"></i> Refusé</span>`
                            : `<span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs status-badge">
                    <i class="fas fa-clock mr-1"></i> En attente</span>`
                    }
                </td>
                <td class="p-3">${conge.duree} jours</td>
                <td class="p-3">${conge.date_debut} au ${conge.date_fin}</td>
                <td class="p-3">
                    <button class="edit text-blue-500 hover:text-blue-700 mr-2 ${conge.status_conge !== 'en attente' ? 'opacity-50 cursor-not-allowed' : ''}" ${conge.status_conge !== 'en attente' ? 'disabled' : ''} onclick="editConge(${conge.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete text-red-500 hover:text-red-700 ${conge.status_conge !== 'en attente' ? 'opacity-50 cursor-not-allowed' : ''}" ${conge.status_conge !== 'en attente' ? 'disabled' : ''} onclick="deleteConge(${conge.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
                `;
                
                tableBody.appendChild(row);
            });
            
            // Calcul des statistique
            const refused = userConges.filter(c => c.status_conge == "refusé").length;
            const accepted = userConges.filter(c => c.status_conge == "approuvé").length;
            const pending = userConges.filter(c => c.status_conge == "en attente").length;

            const refusedElem = document.querySelector(".refused");
            const acceptedElem = document.querySelector(".accepted");
            const pendingElem = document.querySelector(".pending");
            const solde = document.querySelector(".solde");

            if (refusedElem) refusedElem.textContent = refused;
            if (acceptedElem) acceptedElem.textContent = accepted;
            if (pendingElem) pendingElem.textContent = pending;
            if (solde) solde.textContent =` ${user.data.solde_conge} jours ` ;

            allCongesData = userConges;

        } catch (err) {
            console.error("Erreur lors du chargement des congés:", err);
        }
    };

    // supprimer confes
    deleteConge = async (congeId) => {
        if (!confirm("Êtes-vous sûr de vouloir supprimer ce congé ?")) return;
        try {
            await axios.delete(`http://localhost:4000/conges/${congeId}`)

            const notification = {
                id_employee: connected_user,
                id_notif: Math.floor(Math.random() * 20) + 1,
                message: `Votre congé (${conge.date_debut} au ${conge.date_fin}) a été supprimé.`,

            }
            await axios.post(`http://localhost:4000/notification`, notification)
            loadNotifications()


            afficheUserConges(connected_user);
        } catch (err) {
            console.error("Erreur lors de la suppression:", err);
        }
    };

    // afficher les conges de tous users
    const afficherAllConges = async () => {
        try {
                const resconge = await axios.get(`http://localhost:4000/conges`);
        const resusers = await axios.get(`http://localhost:4000/employees`);
        const cardsContainer = document.querySelector('#leaves');

        if (!cardsContainer) return;
        
        cardsContainer.innerHTML = '';
        
        resusers.data.forEach(user => {

            const conges = resconge.data.filter(c => c.id_employee == user.id);
            console.log(conges)
            conges.forEach(conge => {
                const card = document.createElement('div');
                     card.classList.add('leave-card');
                    card.setAttribute("data-employee-id", user.id);
                    card.classList.add('card-hover');
                    card.innerHTML = `
                    <div class="p-3 md:p-4 rounded shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
                        ${conge.status_conge == "approuvé"
                            ? `<span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs float-right status-badge">
                                <i class="fas fa-check text-green-600 text-xs mr-1"></i> Approuvé</span>`
                            : conge.status_conge == "refusé"
                                ? `<span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs float-right status-badge"> 
                                    <i class="fas fa-times mr-1"></i> Refusé</span>`
                                : `<span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs float-right status-badge">
                                    <i class="fas fa-clock mr-1"></i> En attente</span>`
                        }
                        <p class="font-semibold text-sm md:text-base">${user.prenom} ${user.nom}</p>
                        <p class="mb-2 text-xs md:text-sm text-gray-600">${user.poste}</p>
                        <p class="text-xs md:text-sm text-gray-600">Type: <span class="float-right font-bold">${conge.type_conge}</span></p>
                        <p class="text-xs md:text-sm text-gray-600">Du: <span class="float-right font-bold">${conge.date_debut}</span></p>
                        <p class="text-xs md:text-sm text-gray-600">Au: <span class="float-right font-bold">${conge.date_fin}</span></p>
                        <p class="text-xs md:text-sm text-gray-600 mb-3">Durée: <span class="float-right font-bold">${conge.duree} jours</span></p>
                        <div class="flex space-x-2">
                            <button onclick="approveConge(${conge.id})" class="approve-btn bg-orange-500 px-3 py-1 rounded text-white text-xs md:text-sm hover:bg-orange-600 transition ${conge.status_conge !== 'en attente' ? 'opacity-50 cursor-not-allowed' : ''}" ${conge.status_conge !== 'en attente' ? 'disabled' : ''}>
                                Approuver
                            </button>
                            <button onclick="rejectConge(${conge.id})" class="reject-btn bg-yellow-300 px-3 py-1 rounded text-white text-xs md:text-sm hover:bg-yellow-400 transition ${conge.status_conge !== 'en attente' ? 'opacity-50 cursor-not-allowed' : ''}" ${conge.status_conge !== 'en attente' ? 'disabled' : ''}>
                                Refuser
                            </button>
                        </div>
                    </div>
                `;
                    cardsContainer.appendChild(card);
                });
            });

            const refused = resconge.data.filter(c => c.status_conge == "refusé").length;
            const accepted = resconge.data.filter(c => c.status_conge == "approuvé").length;
            const pending = resconge.data.filter(c => c.status_conge == "en attente").length;

            const refusedElem = document.querySelector(".refused");
            const acceptedElem = document.querySelector(".accepted");
            const pendingElem = document.querySelector(".pending");

            if (refusedElem) refusedElem.textContent = refused;
            if (acceptedElem) acceptedElem.textContent = accepted;
            if (pendingElem) pendingElem.textContent = pending;
            
        } catch (error) {
            console.error("Erreur lors du chargement de tous les congés:", error);
        }
    };

    //modifier conge
    if (congeForm) {
        congeForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const updatedConge = {
                date_debut: congeForm.startDate.value,
                date_fin: congeForm.endDate.value,
                type_conge: congeForm.congeType.value,
                justification: congeForm.justification.value,
            };

            try {
                await axios.patch(`http://localhost:4000/conges/${congeForm.congeId.value}`, updatedConge);

                // Recalculer la durée
                const start = new Date(updatedConge.date_debut);
                const end = new Date(updatedConge.date_fin);
                const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

                // Mettre à jour la durée
                await axios.patch(`http://localhost:4000/conges/${congeForm.congeId.value}`, {
                    duree: diffDays
                });
                const notification = {
                    id_employee: connected_user,
                    id_notif: Math.floor(Math.random() * 20) + 1,
                    message: `Votre congé (${conge.date_debut} au ${conge.date_fin}) a été modifiés.`,

                }
                await axios.post(`http://localhost:4000/notification`, notification)
                loadNotifications()

                alert(" Congé mis à jour avec succès !");
                modalClose();
                afficheUserConges(connected_user);

            } catch (err) {
                console.error("Erreur mise à jour:", err);
            }
        });
    }
    //ajouter un congé

    const addForm = document.querySelector('.add');
    if (addForm) {
        addForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const startDate = addForm.startDate.value;
            const endDate = addForm.endDate.value;
            const congeType = addForm.congeType.value;
            const justification = addForm.justification.value;

            // Calcul de la durée
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

            const newConge = {
                id: Math.floor((Math.random()*20)+1),
                id_employee: connected_user,
                type_conge: congeType,
                status_conge: "en attente",
                justification: justification,
                date_debut: startDate,
                date_fin: endDate,
                duree: diffDays,
            };

            try {
                await axios.post(`http://localhost:4000/conges`, newConge);
                // const notification = {
                //     id_employee: connected_user,
                //     id_notif: Math.floor(Math.random() * 20) + 1,
                //     message: `Votre congé (${conge.date_debut} au ${conge.date_fin}) a été ajouté.`,

                // }
                // await axios.post(`http://localhost:4000/notification`, notification)
                // loadNotifications()

                alert(" Congé ajouté avec succès !");
                addForm.reset();
                afficheUserConges(connected_user);
            } catch (err) {
                console.error("Erreur ajout:", err);
            }
        });
    }

       document.getElementById('searchInput').addEventListener('input', function() {
            const searchText = this.value.toLowerCase();
            const rows = document.querySelectorAll('.show tr');
            
            rows.forEach(row => {
                const type = row.querySelector('td:first-child').textContent.toLowerCase();
                const status = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
                const duration = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
                const period = row.querySelector('td:nth-child(4)').textContent.toLowerCase();
                
                if (type.includes(searchText) || status.includes(searchText) || 
                    duration.includes(searchText) || period.includes(searchText)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });


    const notificationPanel = document.getElementById('notificationPanel');
    const notificationButton = document.getElementById('notificationButton');
    const notificationList = document.getElementById('notificationList');
    const notificationDot = document.querySelector('.notification-dot');


    // Function to format date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    // LOAD NOTIFS
    async function loadNotifications() {
        try {

            const res = await axios.get(`http://localhost:4000/notifications`);
            const userNotif = res.data.filter(notif => notif.id_employee == connected_user);

            notificationList.innerHTML = '';

            notificationDot.textContent = userNotif.length;


            // Add notifications to the panel
            userNotif.forEach(notif => {
                const notifElement = document.createElement('div');
                notifElement.innerHTML = `
                       <div class="p-3 bg-purple-50 rounded-lg shadow-md border border-gray-200 w-76 my-2
                       ml-2">
  <div class="notification-title text-sm font-semibold text-gray-800">
    NotificationTitle
  </div>
  <div class="notification-message text-xs text-gray-600 mt-1 ">
   ${notif.message}
  </div>
  <div class="notification-date text-[11px] text-gray-400 mt-2">
    ${formatDate(notif.date)}
  </div>
</div>
                    `; notificationList.appendChild(notifElement);
            });
        } catch (error) {
            console.error('Error loading notifications:', error);
            notificationList.innerHTML = '<div class="notification-item"><div class="notification-message">Error loading notifications</div></div>';
        }
    }
    function toggleNotifications() {
        notificationPanel.classList.toggle('opacity-0');
        notificationPanel.classList.toggle('pointer-events-none');
        notificationPanel.classList.toggle('scale-95');
        notificationPanel.classList.toggle('scale-100');
    }


    notificationButton.addEventListener('click', () => {
        toggleNotifications()
        loadNotifications()
    })

    afficheUserConges(connected_user);
    afficherAllConges();
    loadNotifications()
});