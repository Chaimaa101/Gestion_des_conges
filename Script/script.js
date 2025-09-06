const sidebare = document.createElement('div')
sidebare.innerHTML = `
 <nav class="sidebar fixed w-64 bg-orange-50 h-screen shadow-md flex flex-col" id="sidebar">
        <div class="logo p-5 border-b border-gray-200">
            <h1 class="sidebar-text text-2xl font-bold text-gray-500">RH Dashboard</h1>
        </div>

        <div  class="userInfo p-5 border-b border-gray-200 flex flex-col items-center">
            <img src="https://placehold.co/80x80/FEAF00/FFFFFF?text=KM" alt="Photo profil"
             class="rounded-full w-20 h-20 mb-3">
            <h3 class="sidebar-text font-semibold text-orange-300">Karthi Modesh</h3>
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

        <div class="flex  bg-white border-2 border-gray-300 p-1 rounded-md shadow-sm w-72 ml-160 md:ml-1">
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
const footer = document.createElement('div')
footer.innerHTML= `
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
    el.classList.replace("ml-64", "ml-20") }) 
                sidebarLinks.forEach(el => el.classList.add("hidden")) 
                toggleBtn.innerHTML = `<i class="fas fa-angle-right"></i>` 
            } else {
                sidebar.classList.replace("w-20", "w-64") 
              mainContent.forEach(el => {
    el.classList.replace("ml-20", "ml-64") }) 
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
