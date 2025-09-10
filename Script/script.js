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

        <div class="flex  bg-white border-2 border-gray-300 p-1 rounded-md shadow-sm w-72 ">
            <input type="text" placeholder="Search..." class="w-full text-sm text-gray-700 ">
            <button class=" "md:hidden text-gray-400 hover:text-gray-700">
                <i class="fas fa-search"></i>
            </button>
        </div>

        <div>
            <button class="text-yellow-300 hover:text-yellow-500 mr-2">
                <i class="fas fa-bell text-lg"></i>
            </button>
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
        if (i === index) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-blue-500');
        } else {
            dot.classList.remove('bg-blue-500');
            dot.classList.add('bg-gray-300');
        }
    });
}

const connected_user = 1;

const afficheUserConges = async (id) => {
    let res = await axios.get(`http://localhost:4000/conges`);
    let userConges = res.data.filter(conge => conge.id_employee === id);

    const tableBody = document.querySelector(".show");
    tableBody.innerHTML = ``;

    userConges.forEach(element => {
        element.conges.forEach(conge => {
            const row = document.createElement("tr");
            row.setAttribute("data-id", conge.id_conge);

            row.innerHTML = `
                <td class="p-3">${conge.type_conge}</td>
                <td class="p-3">
                    ${
                        conge.status_conge === "approuvé"
                            ? `<span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                <i class="fas fa-check mr-1"></i> Approuvé</span>`
                            : conge.status_conge === "refusé"
                                ? `<span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                                    <i class="fas fa-times mr-1"></i> Refusé</span>`
                                : `<span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                                    <i class="fas fa-clock mr-1"></i> En attente</span>`
                    }
                </td>
                <td class="p-3">${conge.duree} jours</td>
                <td class="p-3">${conge.type_conge}</td>
                <td class="p-3">
                    <button class="edit text-blue-500 hover:text-blue-700 mr-2" onClick="editConge('${conge.id_conge}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;

            tableBody.appendChild(row);
        });
    });

    // ✅ totals calculation
    let allConges = userConges.flatMap(e => e.conges);
    let refused = allConges.filter(cg => cg.status_conge === "refusé").length;
    let accepted = allConges.filter(cg => cg.status_conge === "approuvé").length;
    let pending = allConges.filter(cg => cg.status_conge === "en attente").length;

    document.querySelector(".refused").textContent = refused;
    document.querySelector(".accepted").textContent = accepted;
    document.querySelector(".pending").textContent = pending;
}
const modal = document.querySelector('.modal')
const closeModalBtn = document.getElementById('closeModal')
const editButtons = document.querySelectorAll('.edit');
const congeForm = document.getElementById('congeForm');

const editConge = async (congeId) => {
    modalOpen();
    try {
        // 👉 get employee + his congés
        const response = await axios.get(`http://localhost:4000/conges`);
        const employee = response.data.find(e => e.id_employee === connected_user);

        if (!employee) {
            console.error("Employé introuvable !");
            return;
        }

        // 👉 on cherche le congé par son id
        const conge = employee.conges.find(c => c.id_conge === congeId);


        if (!conge) {
            console.error("Congé introuvable !");
            return;
        }

        console.log(employee);
        console.log(conge);

        // 👉 fill modal inputs
        congeForm.congeId.value = congeId;
        congeForm.startDate.value = conge.date_debut;
        congeForm.endDate.value = conge.date_fin;
        congeForm.congeType.value = conge.type_conge;
        congeForm.justification.value = conge.justification;

        // 👉 handle submit
        congeForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const updatedConge = {
                date_debut: congeForm.startDate.value,
                date_fin: congeForm.endDate.value,
                type_conge: congeForm.congeType.value,
                justification: congeForm.justification.value,
            };

            try {
                await axios.put(`http://localhost:4000/conges/${congeId}`, updatedConge);
                alert("✅ Congé mis à jour !");
                modalClose();
                afficheUserConges(connected_user); // refresh table
            } catch (err) {
                console.error("Erreur lors de la mise à jour", err);
            }
        });

    } catch (error) {
        console.error(error);
    }
};
const afficherAllConges = async () => {
    let res = await axios.get(`http://localhost:4000/conges`);

    res.data.forEach(element => {
        element.conges.forEach(conge => {
            let cards = document.querySelector('#leaves')
            let card = document.createElement('div')
            card.innerHTML = `
            <div class="p-3 md:p-4 rounded shadow-md border border-gray-100 hover:shadow-lg transition duration-300 animate-slideUp">
           ${conge.status_conge === "approuvé" 
                            ? `<span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs float-right status-badge">
                                <i class="fas fa-check text-green-600 text-xs mr-1"></i> Approuvé</span>` 
                            : conge.status_conge === "refusé" 
                                ? `<span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs float-right status-badge"> 
                                    <i class="fas fa-times mr-1"></i> Refusé</span>` 
                                : `<span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs float-right status-badge">
                                    <i class="fas fa-clock mr-1"></i> En attente</span>`
                        }
          <p class="font-semibold text-sm md:text-base"> ${element.prenom_employee} ${element.nom_employee}</p>
          <p class="mb-2 text-xs md:text-sm text-gray-600">Data Analyste</p>
          <p class="text-xs md:text-sm text-gray-600">Type: <span class="float-right font-bold">${conge.type_conge}</span></p>

          <p class="text-xs md:text-sm text-gray-600">Du: <span class="float-right font-bold">${conge.date_debut}</span></p>
          <p class="text-xs md:text-sm text-gray-600">Au: <span class="float-right font-bold">${conge.date_fin}</span></p>
          <p class="text-xs md:text-sm text-gray-600 mb-3">Durée: <span class="float-right font-bold">${conge.duree} jours</span></p>
          <div class="flex space-x-2">
            <button class="bg-orange-400 px-3 py-1 rounded text-white text-xs md:text-sm hover:bg-orange-500 transition disabled:opacity-50" disabled>
              Approuver
            </button>
            <button class="bg-orange-100 px-3 py-1 rounded text-xs md:text-sm hover:bg-orange-200 transition">
              Refuser
            </button>
          </div>
        </div>
        `
            cards.append(card)
        })

    })
}
// edit 

  function modalOpen() {
            modal.classList.remove('opacity-0');
            modal.classList.remove('pointer-events-none');
            document.body.style.overflow = 'hidden'; 
        }
  function modalClose() {
            modal.classList.add('opacity-0');
            modal.classList.add('pointer-events-none');
            document.body.style.overflow = 'hidden'; 
        }


const addForm = document.getElementById('add-form');

addForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const congeType = document.getElementById("congeType").value;
    const justification = document.getElementById("justification").value;

    const newConge = {
        id_conge: Date.now(),   // 👈 identifiant unique
        date_debut: startDate,
        date_fin: endDate,
        type_conge: congeType,
        justification: justification,
        status_conge: "en attente" // par défaut en attente
    };
const res = await axios.get(`http://localhost:4000/conges/${connected_user}`);
     let employee = res.data;

        // 2. Ajouter le congé dans son tableau
        employee.conges.push(newConge);

        // 3. Mettre à jour l'employé avec le nouveau tableau
        await axios.put(`http://localhost:4000/conges/${connected_user}`, employee)

       
            addForm.reset();

            afficheUserConges(connected_user); // refresh table
            alert("✅ Congé ajouté avec succès !");
        })
       



try {
    afficheUserConges(connected_user);
    afficherAllConges()
} catch (error) {
    console.error(error);
}