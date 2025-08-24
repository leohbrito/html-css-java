// CoolSolutions Analytics and Tracking
// Este arquivo contém configurações para analytics e tracking do site

(function() {
    'use strict';
    
    // Google Analytics 4 (GA4) - Substitua GA_MEASUREMENT_ID pelo seu ID real
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
    
    // Função para carregar Google Analytics
    function loadGoogleAnalytics() {
        if (typeof gtag !== 'undefined') {
            return; // GA já foi carregado
        }
        
        // Carrega o script do Google Analytics
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);
        
        // Configura o gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, {
            'page_title': document.title,
            'page_location': window.location.href
        });
        
        // Tracking de eventos personalizados
        trackPageViews();
        trackButtonClicks();
        trackFormSubmissions();
    }
    
    // Tracking de visualizações de página
    function trackPageViews() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                'page_title': document.title,
                'page_location': window.location.href,
                'page_referrer': document.referrer
            });
        }
    }
    
    // Tracking de cliques em botões
    function trackButtonClicks() {
        document.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' && e.target.classList.contains('button')) {
                const buttonText = e.target.textContent.trim();
                const buttonUrl = e.target.href;
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'button_click', {
                        'button_text': buttonText,
                        'button_url': buttonUrl,
                        'page_location': window.location.href
                    });
                }
            }
        });
    }
    
    // Tracking de envios de formulário
    function trackFormSubmissions() {
        document.addEventListener('submit', function(e) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    'form_id': e.target.id || 'unknown',
                    'form_action': e.target.action,
                    'page_location': window.location.href
                });
            }
        });
    }
    
    // Tracking de tempo na página
    function trackTimeOnPage() {
        let startTime = Date.now();
        
        window.addEventListener('beforeunload', function() {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'time_on_page', {
                    'time_on_page': timeOnPage,
                    'page_title': document.title,
                    'page_location': window.location.href
                });
            }
        });
    }
    
    // Tracking de scroll
    function trackScroll() {
        let maxScroll = 0;
        let scrollTracking = false;
        
        window.addEventListener('scroll', function() {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                // Tracking a cada 25% de scroll
                if (!scrollTracking && maxScroll >= 25) {
                    scrollTracking = true;
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll_depth', {
                            'scroll_depth': '25%',
                            'page_title': document.title,
                            'page_location': window.location.href
                        });
                    }
                } else if (maxScroll >= 50 && scrollTracking) {
                    scrollTracking = false;
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll_depth', {
                            'scroll_depth': '50%',
                            'page_title': document.title,
                            'page_location': window.location.href
                        });
                    }
                } else if (maxScroll >= 75 && !scrollTracking) {
                    scrollTracking = true;
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll_depth', {
                            'scroll_depth': '75%',
                            'page_title': document.title,
                            'page_location': window.location.href
                        });
                    }
                } else if (maxScroll >= 90 && scrollTracking) {
                    scrollTracking = false;
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll_depth', {
                            'scroll_depth': '90%',
                            'page_title': document.title,
                            'page_location': window.location.href
                        });
                    }
                }
            }
        });
    }
    
    // Função para carregar Facebook Pixel (opcional)
    function loadFacebookPixel() {
        const FB_PIXEL_ID = 'XXXXXXXXXX'; // Substitua pelo seu ID real
        
        if (typeof fbq !== 'undefined') {
            return; // Facebook Pixel já foi carregado
        }
        
        // Carrega o script do Facebook Pixel
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://connect.facebook.net/en_US/fbevents.js';
        document.head.appendChild(script);
        
        // Configura o Facebook Pixel
        window.fbq = function() {
            window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
        };
        window.fbq.push = window.fbq;
        window.fbq.loaded = true;
        window.fbq.version = '2.0';
        window.fbq.queue = [];
        
        fbq('init', FB_PIXEL_ID);
        fbq('track', 'PageView');
    }
    
    // Função para carregar LinkedIn Insight Tag (opcional)
    function loadLinkedInInsight() {
        const LINKEDIN_PARTNER_ID = 'XXXXXXXXXX'; // Substitua pelo seu ID real
        
        if (typeof _linkedin_partner_id !== 'undefined') {
            return; // LinkedIn Insight já foi carregado
        }
        
        window._linkedin_partner_id = LINKEDIN_PARTNER_ID;
        
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
        document.head.appendChild(script);
    }
    
    // Inicialização quando o DOM estiver carregado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initializeAnalytics();
        });
    } else {
        initializeAnalytics();
    }
    
    function initializeAnalytics() {
        // Carrega Google Analytics por padrão
        loadGoogleAnalytics();
        
        // Carrega outros trackers se necessário
        // loadFacebookPixel();
        // loadLinkedInInsight();
        
        // Inicializa tracking de tempo e scroll
        trackTimeOnPage();
        trackScroll();
        
        console.log('CoolSolutions Analytics inicializado com sucesso!');
    }
    
})();