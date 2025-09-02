// JavaScript Files Combined 
    
        // data.js
        const websiteData = {
            destinations: [
                {
                    id: 1,
                    name: "Manali, Himachal Pradesh",
                    description: "Hill Station, Snow, Adventure Sports",
                    image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "North India"
                },
                {
                    id: 2,
                    name: "Kashmir, India",
                    description: "Paradise on Earth, Dal Lake, Gulmarg",
                    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "North India"
                },
                {
                    id: 3,
                    name: "Lakshadweep, India",
                    description: "Islands, Coral Reefs, Water Sports",
                    image: "https://images.pexels.com/photos/2888485/pexels-photo-2888485.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "South India"
                },
                {
                    id: 4,
                    name: "Delhi, India",
                    description: "Capital City, Monuments, Markets",
                    image: "https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "North India"
                },
                {
                    id: 5,
                    name: "Agra, Uttar Pradesh",
                    description: "Taj Mahal, Agra Fort, Heritage",
                    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "North India"
                },
                {
                    id: 6,
                    name: "Rajasthan, India",
                    description: "Deserts, Forts, Palaces, Culture",
                    image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "West India"
                },
                {
                    id: 7,
                    name: "Kerala, India",
                    description: "Backwaters, Beaches, Ayurveda",
                    image: "https://images.pexels.com/photos/4276795/pexels-photo-4276795.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "South India"
                },
                {
                    id: 8,
                    name: "Goa, India",
                    description: "Beaches, Nightlife, Portuguese Heritage",
                    image: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "West India"
                }
            ],

                      packages: [
                {
                    id: 1,
                    title: "Himalayan Adventure",
                    description: "10 days exploring the majestic Himalayas, visiting Manali, Shimla, and Dharamshala with trekking and cultural experiences.",
                    duration: "10 Days",
                    price: "₹24,999",
                    image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
                    badge: "Popular",
                    featured: true,
                    region: "North India"
                },
                {
                    id: 2,
                    title: "Kashmir Paradise",
                    description: "8 days journey through the beautiful valleys of Kashmir, experiencing Dal Lake, Gulmarg, and Pahalgam.",
                    duration: "8 Days",
                    price: "₹29,999",
                    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "North India"
                },
                {
                    id: 3,
                    title: "Lakshadweep Escape",
                    description: "7 days in the pristine islands of Lakshadweep with luxury accommodations and water sports.",
                    duration: "7 Days",
                    price: "₹34,999",
                    image: "https://images.pexels.com/photos/2888485/pexels-photo-2888485.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "South India"
                },
                {
                    id: 4,
                    title: "Rajasthan Royal Experience",
                    description: "12 days exploring the royal heritage of Rajasthan with visits to Jaipur, Udaipur, and Jodhpur.",
                    duration: "12 Days",
                    price: "₹32,999",
                    image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "West India"
                },
                {
                    id: 5,
                    title: "Kerala Backwaters",
                    description: "9 days discovering the serene backwaters, tea plantations, and beaches of God's Own Country.",
                    duration: "9 Days",
                    price: "₹27,499",
                    image: "https://images.pexels.com/photos/4276795/pexels-photo-4276795.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "South India"
                },
                {
                    id: 6,
                    title: "Goa Beach Holiday",
                    description: "6 days of sun, sand, and Portuguese heritage in the party capital of India.",
                    duration: "6 Days",
                    price: "₹19,999",
                    image: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "West India"
                },
                {
                    id: 7,
                    title: "Spiritual India",
                    description: "14 days journey through Varanasi, Rishikesh, and Amritsar for a spiritual awakening.",
                    duration: "14 Days",
                    price: "₹39,999",
                    image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "North India"
                },
                {
                    id: 8,
                    title: "Wildlife Safari",
                    description: "8 days wildlife adventure in Ranthambore, Bandhavgarh, and Kanha with expert guides.",
                    duration: "8 Days",
                    price: "₹36,499",
                    image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800",
                    featured: true,
                    region: "Central India"
                }
            ],

   features: [
                {
                    id: 1,
                    icon: "fas fa-users",
                    title: "Trusted Guides",
                    description: "Expert local guides with deep knowledge of destinations and cultures"
                },
                {
                    id: 2,
                    icon: "fas fa-gem",
                    title: "Affordable Luxury",
                    description: "Premium experiences at competitive prices with exceptional value"
                },
                {
                    id: 3,
                    icon: "fas fa-clock",
                    title: "24/7 Support",
                    description: "Round-the-clock assistance wherever your journey takes you"
                },
                {
                    id: 4,
                    icon: "fas fa-shield-alt",
                    title: "Safe & Secure",
                    description: "Comprehensive insurance and safety protocols for peace of mind"
                },
                {
                    id: 5,
                    icon: "fas fa-heart",
                    title: "Personalized Service",
                    description: "Tailored itineraries designed specifically for your preferences"
                },
                {
                    id: 6,
                    icon: "fas fa-leaf",
                    title: "Eco-Friendly",
                    description: "Sustainable tourism practices that protect our beautiful planet"
                }
            ],

            reviews: [
                {
                    id: 1,
                    name: "Sarah Johnson",
                    package: "European Adventure Package",
                    rating: 5,
                    comment: "Wanderlux made our European vacation absolutely perfect. Every detail was carefully planned, and our guide was incredibly knowledgeable. We'll definitely book with them again!",
                    image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                },
                {
                    id: 2,
                    name: "Michael Chen",
                    package: "Asian Discovery Package",
                    rating: 5,
                    comment: "The Asian Discovery tour exceeded all expectations. From the temples of Kyoto to the beaches of Thailand, every moment was magical. Exceptional service throughout!",
                    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                },
                {
                    id: 3,
                    name: "Emma Davis",
                    package: "African Safari Package",
                    rating: 5,
                    comment: "Our African safari was the trip of a lifetime! The accommodations were luxurious and the wildlife viewing was incredible. Thank you Wanderlux for an unforgettable experience.",
                    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                }
            ],

            team: [
                {
                    id: 1,
                    name: "David Thompson",
                    position: "Founder & CEO",
                    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
                    social: {
                        linkedin: "#",
                        twitter: "#"
                    }
                },
                {
                    id: 2,
                    name: "Maria Rodriguez",
                    position: "Head of Operations",
                    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
                    social: {
                        linkedin: "#",
                        twitter: "#"
                    }
                },
                {
                    id: 3,
                    name: "James Wilson",
                    position: "Senior Travel Consultant",
                    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
                    social: {
                        linkedin: "#",
                        twitter: "#"
                    }
                },
                {
                    id: 4,
                    name: "Lisa Zhang",
                    position: "Asia Specialist",
                    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
                    social: {
                        linkedin: "#",
                        twitter: "#"
                    }
                }
            ],

            gallery: [
                {
                    id: 1,
                    image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600",
                    alt: "Mountain landscape"
                },
                {
                    id: 2,
                    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
                    alt: "Beach sunset"
                },
                {
                    id: 3,
                    image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600",
                    alt: "Safari wildlife"
                },
                {
                    id: 4,
                    image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600",
                    alt: "City skyline"
                },
                {
                    id: 5,
                    image: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=600",
                    alt: "Cultural site"
                },
                {
                    id: 6,
                    image: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=600",
                    alt: "Adventure activity"
                },
                {
                    id: 7,
                    image: "https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=600",
                    alt: "Natural wonder"
                },
                {
                    id: 8,
                    image: "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=600",
                    alt: "Local culture"
                }
            ]
        };

        // components.js
        const Components = {
            // Render destination cards
            renderDestinations: function(destinations) {
                const grid = document.querySelector('.destinations-grid');
                if (!grid) return;

                grid.innerHTML = destinations.map(destination => `
                <div class="destination-card card animate-on-scroll">
                    <div class="card-image">
                    <img src="${destination.image}" alt="${destination.name}" loading="lazy">
                    <div class="card-overlay">
                        <h3>${destination.name}</h3>
                        <p>${destination.description}</p>
                        <a href="#packages" class="btn btn-secondary">Explore</a>
                    </div>
                    </div>
                </div>
                `).join('');
            },

            // Render package cards
            renderPackages: function(packages) {
                const grid = document.querySelector('.packages-grid');
                if (!grid) return;

                grid.innerHTML = packages.map(pkg => `
                <div class="package-card card animate-on-scroll">
                    <div class="card-image">
                    <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
                    ${pkg.badge ? `<div class="package-badge">${pkg.badge}</div>` : ''}
                    </div>
                    <div class="card-content">
                    <h3>${pkg.title}</h3>
                    <p>${pkg.description}</p>
                    <div class="package-details">
                        <span class="duration">
                        <i class="fas fa-clock"></i> ${pkg.duration}
                        </span>
                        <span class="price">${pkg.price}</span>
                    </div>
                    <button class="btn btn-primary package-btn" data-package="${pkg.title}">
                        Book Now
                    </button>
                    </div>
                </div>
                `).join('');
            },

            // Render feature cards
            renderFeatures: function(features) {
                const grid = document.querySelector('.features-grid');
                if (!grid) return;

                grid.innerHTML = features.map(feature => `
                <div class="feature-card animate-on-scroll">
                    <div class="feature-icon">
                    <i class="${feature.icon}"></i>
                    </div>
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                </div>
                `).join('');
            },

            // Render review cards
            renderReviews: function(reviews) {
                const carousel = document.querySelector('.reviews-carousel');
                const dotsContainer = document.querySelector('.carousel-dots');
                if (!carousel || !dotsContainer) return;

                carousel.innerHTML = reviews.map((review, index) => `
                <div class="review-card ${index === 0 ? 'active' : ''}">
                    <div class="stars">
                    ${Array(review.rating).fill('<i class="fas fa-star"></i>').join('')}
                    </div>
                    <p>"${review.comment}"</p>
                    <div class="reviewer">
                    <img src="${review.image}" alt="${review.name}" loading="lazy">
                    <div class="reviewer-info">
                        <h4>${review.name}</h4>
                        <span>${review.package}</span>
                    </div>
                    </div>
                </div>
                `).join('');

                dotsContainer.innerHTML = reviews.map((_, index) => `
                <span class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
                `).join('');
            },

            // Render team cards
            renderTeam: function(team) {
                const grid = document.querySelector('.team-grid');
                if (!grid) return;

                grid.innerHTML = team.map(member => `
                <div class="team-card card animate-on-scroll">
                    <div class="team-image">
                    <img src="${member.image}" alt="${member.name}" loading="lazy">
                    </div>
                    <div class="team-info">
                    <h3>${member.name}</h3>
                    <p>${member.position}</p>
                    <div class="team-social">
                        <a href="${member.social.linkedin}" aria-label="LinkedIn">
                        <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="${member.social.twitter}" aria-label="Twitter">
                        <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    </div>
                </div>
                `).join('');
            },

            // Render gallery items
            renderGallery: function(gallery) {
                const grid = document.querySelector('.gallery-grid');
                if (!grid) return;

                grid.innerHTML = gallery.map(item => `
                <div class="gallery-item animate-on-scroll" data-image="${item.image}">
                    <img src="${item.image}" alt="${item.alt}" loading="lazy">
                    <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                    </div>
                </div>
                `).join('');
            },

            // Initialize all components
            init: function() {
                if (typeof websiteData !== 'undefined') {
                    this.renderDestinations(websiteData.destinations);
                    this.renderPackages(websiteData.packages);
                    this.renderFeatures(websiteData.features);
                    this.renderReviews(websiteData.reviews);
                    this.renderTeam(websiteData.team);
                    this.renderGallery(websiteData.gallery);
                }
            }
        };

        // navigation.js
        const Navigation = {
            // Initialize navigation
            init: function() {
                this.initScrollEffect();
                this.initMobileMenu();
                this.initSmoothScroll();
                this.initHeroScroll();
                this.updateActiveLink();
            },

            // Navbar scroll effect
            initScrollEffect: function() {
                const navbar = document.getElementById('navbar');
                if (!navbar) return;

                window.addEventListener('scroll', () => {
                    if (window.scrollY > 100) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                });
            },

            // Mobile menu toggle
            initMobileMenu: function() {
                const hamburger = document.getElementById('hamburger');
                const navMenu = document.getElementById('nav-menu');
                
                if (!hamburger || !navMenu) return;

                hamburger.addEventListener('click', () => {
                    hamburger.classList.toggle('active');
                    navMenu.classList.toggle('active');
                });

                // Close mobile menu when clicking on a link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', () => {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                    });
                });

                // Close mobile menu when clicking outside
                document.addEventListener('click', (e) => {
                    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                    }
                });
            },

            // Smooth scroll for navigation links
            initSmoothScroll: function() {
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
                        const target = document.querySelector(this.getAttribute('href'));
                        
                        if (target) {
                            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                            
                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    });
                });
            },

            // Hero scroll animation
            initHeroScroll: function() {
                const heroScroll = document.querySelector('.hero-scroll');
                
                if (heroScroll) {
                    heroScroll.addEventListener('click', () => {
                        const destinationsSection = document.querySelector('#destinations');
                        if (destinationsSection) {
                            const offsetTop = destinationsSection.offsetTop - 80;
                            
                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    });
                }
            },

            // Update active navigation link
            updateActiveLink: function() {
                const sections = document.querySelectorAll('section[id]');
                const navLinks = document.querySelectorAll('.nav-link');
                
                window.addEventListener('scroll', () => {
                    let current = '';
                    
                    sections.forEach(section => {
                        const sectionTop = section.offsetTop - 100;
                        const sectionHeight = section.offsetHeight;
                        
                        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                            current = section.getAttribute('id');
                        }
                    });
                    
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${current}`) {
                            link.classList.add('active');
                        }
                    });
                });
            }
        };

        // carousel.js
        const Carousel = {
            currentSlide: 0,
            reviewCards: [],
            dots: [],
            autoPlayInterval: null,

            // Initialize carousel
            init: function() {
                this.reviewCards = document.querySelectorAll('.review-card');
                this.dots = document.querySelectorAll('.dot');
                
                if (this.reviewCards.length === 0) return;
                
                this.initDotNavigation();
                this.initAutoPlay();
                this.initTouchSupport();
                this.pauseOnHover();
            },

            // Show specific slide
            showSlide: function(n) {
                if (n >= this.reviewCards.length) this.currentSlide = 0;
                if (n < 0) this.currentSlide = this.reviewCards.length - 1;
                
                this.reviewCards.forEach(card => card.classList.remove('active'));
                this.dots.forEach(dot => dot.classList.remove('active'));
                
                if (this.reviewCards[this.currentSlide]) {
                    this.reviewCards[this.currentSlide].classList.add('active');
                }
                
                if (this.dots[this.currentSlide]) {
                    this.dots[this.currentSlide].classList.add('active');
                }
            },

            // Go to next slide
            nextSlide: function() {
                this.currentSlide++;
                this.showSlide(this.currentSlide);
            },

            // Go to previous slide
            prevSlide: function() {
                this.currentSlide--;
                this.showSlide(this.currentSlide);
            },

            // Go to specific slide
            goToSlide: function(n) {
                this.currentSlide = n;
                this.showSlide(this.currentSlide);
            },

            // Initialize dot navigation
            initDotNavigation: function() {
                this.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        this.goToSlide(index);
                        this.resetAutoPlay();
                    });
                });
            },

            // Initialize auto-play
            initAutoPlay: function() {
                this.autoPlayInterval = setInterval(() => {
                    this.nextSlide();
                }, 5000);
            },

            // Reset auto-play
            resetAutoPlay: function() {
                clearInterval(this.autoPlayInterval);
                this.initAutoPlay();
            },

            // Initialize touch support for mobile
            initTouchSupport: function() {
                const carousel = document.querySelector('.reviews-carousel');
                if (!carousel) return;

                let startX = 0;
                let endX = 0;

                carousel.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                });

                carousel.addEventListener('touchend', (e) => {
                    endX = e.changedTouches[0].clientX;
                    this.handleSwipe();
                });

                carousel.addEventListener('mousedown', (e) => {
                    startX = e.clientX;
                    carousel.style.cursor = 'grabbing';
                });

                carousel.addEventListener('mouseup', (e) => {
                    endX = e.clientX;
                    carousel.style.cursor = 'grab';
                    this.handleSwipe();
                });
            },

            // Handle swipe gestures
            handleSwipe: function() {
                const threshold = 50;
                const diff = startX - endX;

                if (Math.abs(diff) > threshold) {
                    if (diff > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                    this.resetAutoPlay();
                }
            },

            // Pause auto-play on hover
            pauseOnHover: function() {
                const carousel = document.querySelector('.reviews-carousel');
                if (!carousel) return;

                carousel.addEventListener('mouseenter', () => {
                    clearInterval(this.autoPlayInterval);
                });

                carousel.addEventListener('mouseleave', () => {
                    this.initAutoPlay();
                });
            }
        };

        // animations.js
        const Animations = {
            // Initialize scroll animations
            initScrollAnimations: function() {
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animated');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);

                // Observe all elements with animation classes
                document.querySelectorAll('.animate-on-scroll').forEach(el => {
                    observer.observe(el);
                });
            },

            // Parallax effect for hero section
            initParallax: function() {
                const heroBackground = document.querySelector('.hero-background');
                if (!heroBackground) return;

                window.addEventListener('scroll', () => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * -0.5;
                    heroBackground.style.transform = `translate3d(0, ${rate}px, 0)`;
                });
            },

            // Stagger animation for grids
            initStaggerAnimation: function() {
                const grids = document.querySelectorAll('.destinations-grid, .packages-grid, .features-grid, .team-grid, .gallery-grid');
                
                grids.forEach(grid => {
                    const items = grid.querySelectorAll('.animate-on-scroll');
                    items.forEach((item, index) => {
                        item.style.animationDelay = `${index * 0.1}s`;
                    });
                });
            },

            // Ripple effect for buttons
            createRipple: function(event) {
                const button = event.currentTarget;
                const rect = button.getBoundingClientRect();
                
                const circle = document.createElement('span');
                const diameter = Math.max(button.clientWidth, button.clientHeight);
                const radius = diameter / 2;
                
                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${event.clientX - rect.left - radius}px`;
                circle.style.top = `${event.clientY - rect.top - radius}px`;
                circle.classList.add('ripple');
                
                const ripple = button.querySelector('.ripple');
                if (ripple) {
                    ripple.remove();
                }
                
                button.appendChild(circle);
                
                setTimeout(() => {
                    circle.remove();
                }, 600);
            },

            // Initialize ripple effects
            initRippleEffects: function() {
                document.querySelectorAll('.btn').forEach(button => {
                    button.style.position = 'relative';
                    button.style.overflow = 'hidden';
                    button.addEventListener('click', this.createRipple);
                });
            },

            // Smooth reveal for sections
            initSectionReveal: function() {
                const sections = document.querySelectorAll('section');
                
                sections.forEach(section => {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(30px)';
                    section.style.transition = 'all 0.6s ease';
                });
                
                // Hero section should be visible immediately
                const heroSection = document.querySelector('#hero');
                if (heroSection) {
                    heroSection.style.opacity = '1';
                    heroSection.style.transform = 'translateY(0)';
                }
                
                const revealSections = () => {
                    sections.forEach(section => {
                        const sectionTop = section.getBoundingClientRect().top;
                        const windowHeight = window.innerHeight;
                        
                        if (sectionTop < windowHeight - 50) {
                            section.style.opacity = '1';
                            section.style.transform = 'translateY(0)';
                        }
                    });
                };
                
                window.addEventListener('scroll', revealSections);
                revealSections(); // Initial check
            },

            // Text reveal animation
            initTextReveal: function() {
                const textElements = document.querySelectorAll('.text-reveal');
                
                textElements.forEach(element => {
                    const text = element.textContent;
                    element.innerHTML = text.split('').map(char => 
                        `<span style="display: inline-block; transform: translateY(100%); transition: transform 0.5s ease;">${char === ' ' ? '&nbsp;' : char}</span>`
                    ).join('');
                    
                    const spans = element.querySelectorAll('span');
                    
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                spans.forEach((span, index) => {
                                    setTimeout(() => {
                                        span.style.transform = 'translateY(0)';
                                    }, index * 50);
                                });
                                observer.unobserve(entry.target);
                            }
                        });
                    });
                    
                    observer.observe(element);
                });
            },

            // Loading animation
            showLoading: function(element) {
                element.classList.add('loading');
            },

            hideLoading: function(element) {
                element.classList.remove('loading');
            },

            // Initialize all animations
            init: function() {
                // Wait for DOM to be fully loaded
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', () => {
                        this.initScrollAnimations();
                        this.initParallax();
                        this.initStaggerAnimation();
                        this.initRippleEffects();
                        this.initSectionReveal();
                        this.initTextReveal();
                    });
                } else {
                    this.initScrollAnimations();
                    this.initParallax();
                    this.initStaggerAnimation();
                    this.initRippleEffects();
                    this.initSectionReveal();
                    this.initTextReveal();
                }
            }
        };

        // forms.js
        const Forms = {
            // Initialize all forms
            init: function() {
                this.initContactForm();
                this.initNewsletterForm();
                this.initPackageBooking();
            },

            // Initialize contact form
            initContactForm: function() {
                const contactForm = document.getElementById('contact-form');
                if (!contactForm) return;

                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleContactSubmission(contactForm);
                });
            },

            // Handle contact form submission
            handleContactSubmission: function(form) {
                const formData = new FormData(form);
                const formObject = {};
                
                formData.forEach((value, key) => {
                    formObject[key] = value;
                });

                // Validate form
                if (!this.validateContactForm(formObject)) {
                    return;
                }

                const submitBtn = form.querySelector('.btn');
                const originalText = submitBtn.textContent;
                
                // Show loading state
                Animations.showLoading(submitBtn);
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    this.showSuccessMessage(submitBtn, originalText);
                    form.reset();
                    console.log('Contact form submitted:', formObject);
                }, 2000);
            },

            // Validate contact form
            validateContactForm: function(data) {
                const errors = [];

                if (!data.name || data.name.trim().length < 2) {
                    errors.push('Name must be at least 2 characters long');
                }

                if (!data.email || !this.isValidEmail(data.email)) {
                    errors.push('Please enter a valid email address');
                }

                if (!data.message || data.message.trim().length < 10) {
                    errors.push('Message must be at least 10 characters long');
                }

                if (errors.length > 0) {
                    this.showErrorMessages(errors);
                    return false;
                }

                return true;
            },

            // Initialize newsletter form
            initNewsletterForm: function() {
                const newsletterForm = document.querySelector('.newsletter-form');
                if (!newsletterForm) return;

                newsletterForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleNewsletterSubmission(newsletterForm);
                });
            },

            // Handle newsletter form submission
            handleNewsletterSubmission: function(form) {
                const emailInput = form.querySelector('input[type="email"]');
                const submitBtn = form.querySelector('.btn');

                if (!emailInput.value || !this.isValidEmail(emailInput.value)) {
                    this.showErrorMessage('Please enter a valid email address');
                    return;
                }

                const originalText = submitBtn.textContent;
                
                // Show success state
                submitBtn.textContent = 'Subscribed!';
                submitBtn.style.background = '#10b981';
                submitBtn.disabled = true;

                // Reset after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    emailInput.value = '';
                }, 3000);

                console.log('Newsletter subscription:', emailInput.value);
            },

            // Initialize package booking
            initPackageBooking: function() {
                document.addEventListener('click', (e) => {
                    if (e.target.classList.contains('package-btn')) {
                        e.preventDefault();
                        this.handlePackageBooking(e.target);
                    }
                });
            },

            // Handle package booking
            handlePackageBooking: function(button) {
                const packageTitle = button.dataset.package;
                
                // Show booking confirmation
                this.showBookingModal(packageTitle);
                
                // Scroll to contact section
                setTimeout(() => {
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                        const offsetTop = contactSection.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }, 1000);
            },

            // Show booking modal
            showBookingModal: function(packageTitle) {
                const modal = this.createModal(
                    'Booking Confirmation',
                    `Thank you for your interest in the ${packageTitle} package! Our travel experts will contact you soon to finalize your booking.`,
                    'Continue'
                );
                
                document.body.appendChild(modal);
                modal.style.display = 'block';
                
                // Auto-close after 3 seconds
                setTimeout(() => {
                    modal.remove();
                }, 3000);
            },

            // Create modal
            createModal: function(title, message, buttonText) {
                const modal = document.createElement('div');
                modal.className = 'modal';
                modal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                `;

                modal.innerHTML = `
                    <div style="
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    max-width: 400px;
                    text-align: center;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                    ">
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem;">${title}</h3>
                    <p style="margin-bottom: 1.5rem; color: var(--text-light);">${message}</p>
                    <button class="btn btn-primary" onclick="this.closest('.modal').remove()">${buttonText}</button>
                    </div>
                `;

                return modal;
            },

            // Show success message
            showSuccessMessage: function(button, originalText) {
                button.textContent = 'Message Sent!';
                button.style.background = '#10b981';
                Animations.hideLoading(button);

                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                    button.disabled = false;
                }, 3000);
            },

            // Show error messages
            showErrorMessages: function(errors) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-messages';
                errorDiv.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #fee2e2;
                    border: 1px solid #fecaca;
                    color: #dc2626;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    z-index: 9999;
                    max-width: 300px;
                `;

                errorDiv.innerHTML = `
                    <strong>Please fix the following errors:</strong>
                    <ul style="margin: 0.5rem 0 0 1rem;">
                    ${errors.map(error => `<li>${error}</li>`).join('')}
                    </ul>
                `;

                document.body.appendChild(errorDiv);

                setTimeout(() => {
                    errorDiv.remove();
                }, 5000);
            },

            // Show single error message
            showErrorMessage: function(message) {
                this.showErrorMessages([message]);
            },

            // Validate email
            isValidEmail: function(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            },

            // Auto-resize textarea
            autoResizeTextarea: function(textarea) {
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
            }
        };

        // gallery.js
        const Gallery = {
            // Initialize gallery
            init: function() {
                this.initLightbox();
                this.initImageLoading();
            },

            // Initialize lightbox functionality
            initLightbox: function() {
                const galleryItems = document.querySelectorAll('.gallery-item');
                const lightbox = document.getElementById('lightbox');
                const lightboxImg = document.getElementById('lightbox-img');
                const lightboxClose = document.querySelector('.lightbox-close');

                if (!lightbox || !lightboxImg || !lightboxClose) return;

                // Open lightbox when gallery item is clicked
                galleryItems.forEach(item => {
                    item.addEventListener('click', () => {
                        const imgSrc = item.dataset.image || item.querySelector('img').src;
                        this.openLightbox(imgSrc);
                    });
                });

                // Close lightbox events
                lightboxClose.addEventListener('click', this.closeLightbox);
                
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) {
                        this.closeLightbox();
                    }
                });

                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (lightbox.style.display === 'block') {
                        switch(e.key) {
                            case 'Escape':
                                this.closeLightbox();
                                break;
                            case 'ArrowLeft':
                                this.prevImage();
                                break;
                            case 'ArrowRight':
                                this.nextImage();
                                break;
                        }
                    }
                });
            },

            // Open lightbox with image
            openLightbox: function(imageSrc) {
                const lightbox = document.getElementById('lightbox');
                const lightboxImg = document.getElementById('lightbox-img');
                
                if (!lightbox || !lightboxImg) return;

                lightboxImg.src = imageSrc;
                lightbox.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Add fade-in animation
                lightbox.style.opacity = '0';
                setTimeout(() => {
                    lightbox.style.opacity = '1';
                }, 10);
            },

            // Close lightbox
            closeLightbox: function() {
                const lightbox = document.getElementById('lightbox');
                if (!lightbox) return;

                lightbox.style.opacity = '0';
                setTimeout(() => {
                    lightbox.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 300);
            },

            // Navigate to previous image
            prevImage: function() {
                const galleryItems = document.querySelectorAll('.gallery-item');
                const currentImg = document.getElementById('lightbox-img').src;
                
                let currentIndex = -1;
                galleryItems.forEach((item, index) => {
                    const imgSrc = item.dataset.image || item.querySelector('img').src;
                    if (imgSrc === currentImg) {
                        currentIndex = index;
                    }
                });
                
                if (currentIndex > 0) {
                    const prevItem = galleryItems[currentIndex - 1];
                    const prevImgSrc = prevItem.dataset.image || prevItem.querySelector('img').src;
                    document.getElementById('lightbox-img').src = prevImgSrc;
                } else if (galleryItems.length > 0) {
                    // Loop to last image
                    const lastItem = galleryItems[galleryItems.length - 1];
                    const lastImgSrc = lastItem.dataset.image || lastItem.querySelector('img').src;
                    document.getElementById('lightbox-img').src = lastImgSrc;
                }
            },

            // Navigate to next image
            nextImage: function() {
                const galleryItems = document.querySelectorAll('.gallery-item');
                const currentImg = document.getElementById('lightbox-img').src;
                
                let currentIndex = -1;
                galleryItems.forEach((item, index) => {
                    const imgSrc = item.dataset.image || item.querySelector('img').src;
                    if (imgSrc === currentImg) {
                        currentIndex = index;
                    }
                });
                
                if (currentIndex < galleryItems.length - 1) {
                    const nextItem = galleryItems[currentIndex + 1];
                    const nextImgSrc = nextItem.dataset.image || nextItem.querySelector('img').src;
                    document.getElementById('lightbox-img').src = nextImgSrc;
                } else if (galleryItems.length > 0) {
                    // Loop to first image
                    const firstItem = galleryItems[0];
                    const firstImgSrc = firstItem.dataset.image || firstItem.querySelector('img').src;
                    document.getElementById('lightbox-img').src = firstImgSrc;
                }
            },

            // Initialize lazy loading for images
            initImageLoading: function() {
                if ('IntersectionObserver' in window) {
                    const imageObserver = new IntersectionObserver((entries, observer) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const img = entry.target;
                                if (img.dataset.src) {
                                    img.src = img.dataset.src;
                                    img.classList.remove('lazy');
                                    imageObserver.unobserve(img);
                                }
                            }
                        });
                    });

                    document.querySelectorAll('img[data-src]').forEach(img => {
                        imageObserver.observe(img);
                    });
                }

                // Error handling for images
                document.querySelectorAll('img').forEach(img => {
                    img.addEventListener('error', function() {
                        this.src = 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400';
                        this.alt = 'Travel destination';
                    });
                });
            },

            // Filter gallery items
            filterGallery: function(category) {
                const galleryItems = document.querySelectorAll('.gallery-item');
                
                galleryItems.forEach(item => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.style.display = 'block';
                        item.classList.add('animate-on-scroll');
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        };

        // main.js
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize all modules
            Components.init();
            Navigation.init();
            Animations.init();
            Carousel.init();
            Gallery.init();
            Forms.init();

            // Initialize additional features
            initDestinationCardActions();
            initPerformanceOptimizations();
            initAccessibilityFeatures();
            initErrorHandling();
        });

        // Initialize destination card actions
        function initDestinationCardActions() {
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('card-btn') || e.target.closest('.card-btn')) {
                    e.preventDefault();
                    
                    // Scroll to packages section
                    const packagesSection = document.querySelector('#packages');
                    if (packagesSection) {
                        const offsetTop = packagesSection.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                        
                        // Highlight packages section temporarily
                        packagesSection.style.background = '#f0f9ff';
                        setTimeout(() => {
                            packagesSection.style.background = '';
                        }, 2000);
                    }
                }
            });
        }

        // Initialize performance optimizations
        function initPerformanceOptimizations() {
            // Preload critical images
            const criticalImages = [
                'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1920'
            ];
            
            criticalImages.forEach(src => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = src;
                document.head.appendChild(link);
            });

            // Optimize scroll performance
            let ticking = false;
            
            function updateOnScroll() {
                // Batch scroll-related updates here
                ticking = false;
            }
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(updateOnScroll);
                    ticking = true;
                }
            });
        }

        // Initialize accessibility features
        function initAccessibilityFeatures() {
            // Add skip link
            const skipLink = document.createElement('a');
            skipLink.href = '#main-content';
            skipLink.textContent = 'Skip to main content';
            skipLink.className = 'skip-link';
            skipLink.style.cssText = `
                position: absolute;
                top: -40px;
                left: 6px;
                background: var(--primary-color);
                color: white;
                padding: 8px;
                text-decoration: none;
                border-radius: 4px;
                z-index: 10000;
                transition: top 0.3s;
            `;
            
            skipLink.addEventListener('focus', () => {
                skipLink.style.top = '6px';
            });
            
            skipLink.addEventListener('blur', () => {
                skipLink.style.top = '-40px';
            });
            
            document.body.insertBefore(skipLink, document.body.firstChild);

            // Add main content landmark
            const heroSection = document.querySelector('#hero');
            if (heroSection) {
                heroSection.id = 'main-content';
                heroSection.setAttribute('tabindex', '-1');
            }

            // Improve focus management
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    document.body.classList.add('keyboard-navigation');
                }
            });

            document.addEventListener('mousedown', () => {
                document.body.classList.remove('keyboard-navigation');
            });

            // Add focus styles for keyboard navigation
            const style = document.createElement('style');
            style.textContent = `
                .keyboard-navigation *:focus {
                    outline: 2px solid var(--primary-color) !important;
                    outline-offset: 2px !important;
                }
            `;
            document.head.appendChild(style);
        }

        // Initialize error handling
        function initErrorHandling() {
            // Global error handler
            window.addEventListener('error', (e) => {
                console.error('Global error:', e.error);
                // You could send this to an error reporting service
            });

            // Unhandled promise rejection handler
            window.addEventListener('unhandledrejection', (e) => {
                console.error('Unhandled promise rejection:', e.reason);
                // You could send this to an error reporting service
            });

            // Image error handling
            document.addEventListener('error', (e) => {
                if (e.target.tagName === 'IMG') {
                    e.target.src = 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400';
                    e.target.alt = 'Travel destination';
                }
            }, true);
        }

        // Utility functions
        const Utils = {
            // Debounce function
            debounce: function(func, wait, immediate) {
                let timeout;
                return function executedFunction(...args) {
                    const later = () => {
                        timeout = null;
                        if (!immediate) func(...args);
                    };
                    const callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func(...args);
                };
            },

            // Throttle function
            throttle: function(func, limit) {
                let inThrottle;
                return function(...args) {
                    if (!inThrottle) {
                        func.apply(this, args);
                        inThrottle = true;
                        setTimeout(() => inThrottle = false, limit);
                    }
                };
            },

            // Get element offset
            getOffset: function(element) {
                const rect = element.getBoundingClientRect();
                return {
                    top: rect.top + window.scrollY,
                    left: rect.left + window.scrollX
                };
            },

            // Check if element is in viewport
            isInViewport: function(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            },

            // Format currency
            formatCurrency: function(amount, currency = 'USD') {
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: currency
                }).format(amount);
            },

            // Format date
            formatDate: function(date, options = {}) {
                return new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    ...options
                }).format(new Date(date));
            }
        };

        // Export utilities for use in other modules
        window.Utils = Utils;



        
