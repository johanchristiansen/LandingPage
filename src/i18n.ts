import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Custom IP-based language detector
const ipDetector = {
  name: 'ip',
  async: true,
  lookup: (): string | undefined => {
    // Synchronous fallback - return undefined to defer to async
    return undefined;
  },
  lookupAsync: (_options: unknown): Promise<string | undefined> => {
    return fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
        if (data.country_code === 'ID') {
          return 'id';
        } else {
          return 'en';
        }
      })
      .catch((error) => {
        console.error('Failed to detect location based on IP:', error);
        return undefined;
      });
  },
  cacheUserLanguage: (lng: string) => {
    // Optional: save to localStorage
    if (lng) localStorage.setItem('i18nextLng', lng);
  },
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector(ipDetector);

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)
  // We will bundle translations for now to avoid async loading issues on first steps, can switch to Backend later or use it if we create public/locales
  // For this environment, importing json files directly is safer/easier than fetching from public folder during dev often
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    detection: {
      // order and from where user language should be detected
      order: [
        'ip',
        'querystring',
        'cookie',
        'localStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',

      // cache user language on
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          auth: {
            signup: {
              backToHome: 'Back to Home',
              title: 'Create your account',
              nameLabel: 'Full Name',
              emailLabel: 'Email address',
              passwordLabel: 'Password',
              signUpButton: 'Sign up',
              alreadyHaveAccount: 'Already have an account?',
              signInLink: 'Sign in',
            },
            signin: {
              backToHome: 'Back to Home',
              title: 'Sign in to your account',
              subtitlePrefix: 'Or',
              subtitleLink: 'start your 14-day free trial',
              emailLabel: 'Email address',
              passwordLabel: 'Password',
              signInButton: 'Sign In',
              rememberMe: 'Remember me',
              forgotPassword: 'Forgot your password?',
            },
          },
          dashboard: {
            common: {
              searchPlaceholder: 'Search...',
              signOut: 'Sign Out',
              viewAll: 'View All',
              online: 'Online',
              offline: 'Offline',
              connected: 'Connected',
              disconnected: 'Disconnected',
              status: 'System Status: {{status}}',
              moduleUnderConstruction: 'Module Under Construction',
              moduleDeveloping: 'The {{module}} module is currently being developed.',
            },
            nav: {
              dashboard: 'Dashboard',
            },
            menu: {
              overview: 'Overview',
              subscriptions: 'My Subscriptions',
              api: 'API Access',
              billing: 'Billing',
              settings: 'Settings',
              monitor: 'Monitor',
              users: 'Users',
              services: 'Services',
              logs: 'Logs',
              config: 'Config',
            },
            user: {
              consoleLabel: 'IoT Nexus',
              welcome: 'Hello, {{name}}',
              overviewSubtitle: "Here's what's happening with your IoT infrastructure today.",
              activeSubscriptions: 'Active Subscriptions',
              apiUsage: 'API Usage & Traffic',
              quickActions: 'Quick Actions',
              storageUsed: 'Storage Used',
              totalRequests: 'Total Requests',
              timeRange: {
                last7Days: 'Last 7 Days',
                last30Days: 'Last 30 Days',
              },
              toggles: {
                whatsapp: {
                  label: 'WhatsApp Notifications',
                  desc: 'Receive alerts via WhatsApp',
                },
                aiWeight: {
                  label: 'AI Weight Prediction',
                  desc: 'Enable predictive algorithms',
                },
                autoScale: {
                  label: 'Auto-Scaling',
                  desc: 'Allow dynamic resource allocation',
                },
                debug: {
                  label: 'Debug Mode',
                  desc: 'Show detailed error logs',
                },
              },
              manageDesc: 'Manage your active services and settings.',
              accountSupport: 'Account & Support',
              accountSettings: 'Account Settings',
              manageProfileBilling: 'Manage profile and billing',
              documentation: 'Documentation',
              guidesApiReferences: 'Guides and API references',
              views: {
                subscriptions: {
                  title: 'My Subscriptions',
                  desc: 'Manage your active services and plan details.',
                  items: {
                    poultry: 'Smart Poultry System',
                    cctv: 'AI CCTV Analytics',
                    erp: 'Enterprise ERP',
                    maintenance: 'Predictive Maintenance',
                  },
                  manage: 'Manage Service',
                },
                api: {
                  title: 'API Access',
                  desc: 'Manage API keys and access tokens for your applications.',
                  prodKey: 'Production Key',
                  copy: 'Copy',
                  lastUsed: 'Last used: {{time}} • Created on {{date}}',
                  rateLimit: {
                    label: 'Rate Limiting',
                    desc: 'Automatically throttle requests that exceed your plan limits.',
                  },
                },
                billing: {
                  title: 'Billing & Plans',
                  desc: 'View your invoices and manage payment methods.',
                  balance: 'Current Balance',
                  addFunds: 'Add Funds',
                  currentPlan: 'Current Plan',
                  upgrade: 'Upgrade Plan',
                  proPlan: 'Pro Plan',
                },
                settings: {
                  title: 'Account Settings',
                  desc: 'Manage your profile and preferences.',
                  security: {
                    title: 'Security',
                    '2fa': {
                      label: 'Two-Factor Authentication',
                      desc: 'Add an extra layer of security to your account.',
                    },
                    alerts: {
                      label: 'Login Alerts',
                      desc: 'Get notified of new login attempts.',
                    },
                  },
                  notifications: {
                    title: 'Notifications',
                    digest: {
                      label: 'Email Digests',
                      desc: 'Receive a weekly summary of your IoT stats.',
                    },
                    marketing: {
                      label: 'Marketing Updates',
                      desc: 'Receive news about new features and products.',
                    },
                  },
                },
              },
              charts: {
                last7: 'Last 7 Days',
                last30: 'Last 30 Days',
              },
            },
            admin: {
              portalLabel: 'Admin Portal',
              headerTitle: 'Mission Control',
              systemOverview: 'System Overview',
              systemOverviewSubtitle: 'Real-time monitoring and management.',
              cards: {
                activeUsers: 'Active Users',
                systemHealth: 'System Health',
                securityAlerts: 'Security Alerts',
                allSystemsOperational: 'All systems operational',
                noActiveThreats: 'No active threats',
              },
              userManagement: 'User Management',
              addUser: 'Add User',
              monitor: {
                cpu: 'CPU LOAD',
                ram: 'RAM USAGE',
                gpu: 'GPU TEMP',
              },
              config: {
                title: 'System Configuration',
                globalLimit: 'Global Subscription Limit',
                maxConn: 'MAX CONN',
                limitDesc: 'Hard limit for concurrent WebSocket connections per node.',
                maintenance: {
                  label: 'Maintenance Mode',
                  desc: 'Disables all non-admin access immediately.',
                },
                autoScale: {
                  label: 'Auto-Scaling',
                  desc: 'Spin up new containers when CPU > 80%.',
                },
                rabbitmq: 'RabbitMQ Queue Status',
              },
              table: {
                columns: {
                  user: 'User ID / Name',
                  plan: 'Plan Type',
                  status: 'Status',
                  lastLogin: 'Last Login',
                  actions: 'Actions',
                },
                user: 'User',
                role: 'Role',
                status: 'Status',
                action: 'Action',
                edit: 'Edit',
                admin: 'Admin',
                userLabel: 'User',
                active: 'Active',
                suspended: 'Suspended',
                plans: {
                  enterprise: 'Enterprise',
                  pro: 'Pro',
                  starter: 'Starter',
                },
              },
            },
            footer: {
              rights: '© {{year}} IoT Nexus. All rights reserved.',
              privacy: 'Privacy Policy',
              terms: 'Terms of Service',
              support: 'Support',
            },
          },
          services: {
            title: 'Our Services',
            subtitle: 'Innovation tailored to your industry needs.',
            items: {
              iot: {
                name: 'Smart Ecosystems',
                tagline: 'Seamless Connectivity',
                description:
                  'IoT solutions connecting physical and digital devices for maximum efficiency.',
                features: [
                  'Smart Home & Building Automation',
                  'Industrial IoT Sensors',
                  'Energy Management Systems',
                ],
              },
              ai: {
                name: 'AI & Data Intelligence',
                tagline: 'Leading Artificial Intelligence',
                description:
                  'In-depth data analysis and AI-based automation for better business decisions.',
                features: [
                  'Computer Vision & Surveillance',
                  'Predictive Analytics',
                  'Natural Language Processing',
                ],
              },
              software: {
                name: 'Enterprise Software',
                tagline: 'Integrated Systems',
                description:
                  'Custom software development that unifies your entire business operations.',
                features: [
                  'Custom ERP Development (Odoo)',
                  'Business Intelligence Dashboards',
                  'Workflow Automation Solutions',
                ],
              },
            },
          },
          hero: {
            badge: 'Full-Stack Tech Solution',
            title: 'Your Business Future:',
            titleHighlight: 'Smart, Integrated, & Secure',
            subtitle:
              'Optimize operations with IoT, AI, and Enterprise Software synergy in one reliable Private Cloud ecosystem.',
            ctaPrimary: 'Start Transformation',
            ctaSecondary: 'Explore Services',
            stats: {
              uptime: 'Uptime',
              latency: 'Latency',
              onPrem: 'On-Prem',
            },
            visualization: {
              roboticArm: 'ROBOTIC ARM 04',
              efficiency: 'Efficiency',
              temp: 'Temp',
              load: 'Load',
              aiAutoPilot: 'AI AUTO-PILOT: ACTIVE',
              camera: 'CAM-FACTORY-02',
            },
          },
          bentoGrid: {
            title: 'Solutions for',
            titleHighlight: 'Your Problems',
            subtitle: "Don't let technical obstacles hinder your business potential.",
            problemLabel: 'Problem',
            solutionLabel: 'Solution',
            items: {
              efficiency: {
                problem: 'Inefficient Business',
                solution: 'Smart Automation',
                description:
                  'Slow manual processes hinder growth. We bring AI automation for business acceleration.',
                stat: '50% Faster',
              },
              security: {
                problem: 'Insecure Data',
                solution: 'Private Cloud',
                description:
                  'Data breaches are a real threat. Our self-hosted server infrastructure guarantees your data sovereignty.',
                stat: '100% Secure',
              },
              integration: {
                problem: 'Disconnected Technology',
                solution: 'Integrated Ecosystem',
                description:
                  "Systems that don't communicate are frustrating. Our solution unifies Hardware, Software, and AI.",
                stat: 'All-in-One',
              },
            },
          },
          infrastructure: {
            title: 'Why Choose',
            titleHighlight: 'Us?',
            subtitle: 'Combination of security, integration, and scalability for future business.',
            privateCloud: '[ PRIVATE CLOUD ]',
            securityLabel: 'Security: MAX HOLDOUT',
            accessLabel: 'Access: RESTRICTED',
            items: {
              privacy: {
                title: 'Data Privacy (Local Server)',
                description:
                  'Your data is a valuable asset. We store it in secure private infrastructure, not in public cloud.',
              },
              integration: {
                title: 'End-to-End Integration',
                description:
                  'Perfect synergy between Hardware (IoT), Software (ERP), and AI in one unified ecosystem.',
              },
              scalable: {
                title: 'Scalable Tech',
                description:
                  'Technology ready to grow with your business. From small scale to enterprise, without barriers.',
              },
            },
          },
          products: {
            title: 'Featured',
            titleHighlight: 'Products',
            subtitle: 'Real proof of our innovation in poultry and smart housing industries.',
            poultry: {
              title: 'Smart Poultry System',
              description:
                'IoT-based smart cage monitoring system that monitors temperature, humidity, and ammonia levels in real-time. Equipped with automatic mortality analysis to improve harvest results.',
              status: 'STATUS: CONNECTED',
            },
            smartHome: {
              title: 'Unified Smart Home',
              description:
                'Full integration of security, lighting, and energy efficiency systems in one application. Intuitive voice control and automation based on occupant habits.',
              status: 'AI MODE: ACTIVE',
            },
          },
          techStack: {
            title: 'Supported by Latest Technology',
            subtitle:
              'We use modern technology stack to ensure performance, security, and scalability.',
          },
          footer: {
            cta: {
              title: 'Ready to Transform Your Business?',
              subtitle:
                "Don't let competitors get ahead of you. Let's discuss the best technology solutions for your business efficiency and growth today.",
              button: 'Free Consultation Now',
            },
            brand: {
              tagline: 'Full-Stack Solutions',
              description: 'Trusted technology partner for IoT, AI, and Enterprise Software.',
              status: 'System Operational',
            },
            sections: {
              services: 'SERVICES',
              company: 'COMPANY',
              connect: 'CONNECT',
            },
            servicesLinks: {
              smartEcosystems: 'Smart Ecosystems',
              aiIntelligence: 'AI Intelligence',
              microApis: 'Micro-APIs',
              customSolutions: 'Custom Solutions',
            },
            companyLinks: {
              about: 'About Us',
              caseStudies: 'Case Studies',
              documentation: 'Documentation',
              contact: 'Contact',
            },
            copyright: '© 2026 S.T.S Labs. All systems operational.',
            statusOnline: 'STATUS: ONLINE',
            uptime: 'UPTIME: 99.94%',
          },
          nav: {
            home: 'Home',
            solutions: 'Solutions',
            services: 'Services',
            whyUs: 'Why Us',
            products: 'Products',
            tech: 'Technology',
            consultation: 'Free Consultation',
            contact: 'Contact',
            startHere: 'Start Here',
            dashboard: 'Dashboard',
          },
          language: 'Language',
        },
      },
      id: {
        translation: {
          auth: {
            signup: {
              backToHome: 'Kembali ke Beranda',
              title: 'Buat akun Anda',
              nameLabel: 'Nama Lengkap',
              emailLabel: 'Alamat email',
              passwordLabel: 'Kata sandi',
              signUpButton: 'Daftar',
              alreadyHaveAccount: 'Sudah memiliki akun?',
              signInLink: 'Masuk',
            },
            signin: {
              backToHome: 'Kembali ke Beranda',
              title: 'Masuk ke akun Anda',
              subtitlePrefix: 'Atau',
              subtitleLink: 'mulai uji coba gratis 14 hari',
              emailLabel: 'Alamat email',
              passwordLabel: 'Kata sandi',
              signInButton: 'Masuk',
              rememberMe: 'Ingat saya',
              forgotPassword: 'Lupa kata sandi?',
            },
          },
          dashboard: {
            common: {
              searchPlaceholder: 'Cari...',
              signOut: 'Keluar',
              viewAll: 'Lihat Semua',
              online: 'Online',
              offline: 'Offline',
              connected: 'Terhubung',
              disconnected: 'Terputus',
              status: 'Status Sistem: {{status}}',
              moduleUnderConstruction: 'Modul Sedang Dibangun',
              moduleDeveloping: 'Modul {{module}} saat ini sedang dikembangkan.',
            },
            nav: {
              dashboard: 'Dashboard',
            },
            menu: {
              overview: 'Ringkasan',
              subscriptions: 'Langganan Saya',
              api: 'Akses API',
              billing: 'Tagihan',
              settings: 'Pengaturan',
              monitor: 'Monitor',
              users: 'Pengguna',
              services: 'Layanan',
              logs: 'Log',
              config: 'Konfigurasi',
            },
            user: {
              consoleLabel: 'IoT Nexus',
              welcome: 'Halo, {{name}}',
              overviewSubtitle: 'Inilah yang terjadi dengan infrastruktur IoT Anda hari ini.',
              activeSubscriptions: 'Langganan Aktif',
              apiUsage: 'Penggunaan API & Lalu Lintas',
              quickActions: 'Tindakan Cepat',
              storageUsed: 'Penyimpanan Terpakai',
              totalRequests: 'Total Permintaan',
              timeRange: {
                last7Days: '7 Hari Terakhir',
                last30Days: '30 Hari Terakhir',
              },
              toggles: {
                whatsapp: {
                  label: 'Notifikasi WhatsApp',
                  desc: 'Terima peringatan via WhatsApp',
                },
                aiWeight: {
                  label: 'Prediksi Berat AI',
                  desc: 'Aktifkan algoritma prediktif',
                },
                autoScale: {
                  label: 'Auto-Scaling',
                  desc: 'Izinkan alokasi sumber daya dinamis',
                },
                debug: {
                  label: 'Mode Debug',
                  desc: 'Tampilkan log kesalahan detail',
                },
              },
              manageDesc: 'Kelola layanan aktif dan pengaturan Anda.',
              activeSubscriptions_legacy: 'Langganan Aktif',
              accountSupport: 'Akun & Dukungan',
              accountSettings: 'Pengaturan Akun',
              manageProfileBilling: 'Kelola profil dan penagihan',
              documentation: 'Dokumentasi',
              guidesApiReferences: 'Panduan dan referensi API',
              views: {
                subscriptions: {
                  title: 'Langganan Saya',
                  desc: 'Kelola layanan aktif dan detail paket Anda.',
                  items: {
                    poultry: 'Sistem Unggas Cerdas',
                    cctv: 'Analisis CCTV AI',
                    erp: 'ERP Perusahaan',
                    maintenance: 'Pemeliharaan Prediktif',
                  },
                  manage: 'Kelola Layanan',
                },
                api: {
                  title: 'Akses API',
                  desc: 'Kelola kunci API dan token akses untuk aplikasi Anda.',
                  prodKey: 'Kunci Produksi',
                  copy: 'Salin',
                  lastUsed: 'Terakhir digunakan: {{time}} • Dibuat pada {{date}}',
                  rateLimit: {
                    label: 'Pembatasan Laju',
                    desc: 'Secara otomatis membatasi permintaan yang melebihi batas paket Anda.',
                  },
                },
                billing: {
                  title: 'Tagihan & Paket',
                  desc: 'Lihat faktur dan kelola metode pembayaran Anda.',
                  balance: 'Saldo Saat Ini',
                  addFunds: 'Tambah Dana',
                  currentPlan: 'Paket Saat Ini',
                  upgrade: 'Tingkatkan Paket',
                  proPlan: 'Paket Pro',
                },
                settings: {
                  title: 'Pengaturan Akun',
                  desc: 'Kelola profil dan preferensi Anda.',
                  security: {
                    title: 'Keamanan',
                    '2fa': {
                      label: 'Otentikasi Dua Faktor',
                      desc: 'Tambahkan lapisan keamanan ekstra ke akun Anda.',
                    },
                    alerts: {
                      label: 'Peringatan Login',
                      desc: 'Dapatkan notifikasi percobaan login baru.',
                    },
                  },
                  notifications: {
                    title: 'Notifikasi',
                    digest: {
                      label: 'Ringkasan Email',
                      desc: 'Terima ringkasan mingguan statistik IoT Anda.',
                    },
                    marketing: {
                      label: 'Update Pemasaran',
                      desc: 'Terima berita tentang fitur dan produk baru.',
                    },
                  },
                },
              },
              charts: {
                last7: '7 Hari Terakhir',
                last30: '30 Hari Terakhir',
              },
              cta: {
                launchDashboard: 'Buka Dasbor',
                openAnalytics: 'Buka Analitik',
                accessERP: 'Akses ERP',
              },
            },
            admin: {
              portalLabel: 'Portal Admin',
              headerTitle: 'Pusat Kontrol',
              systemOverview: 'Ikhtisar Sistem',
              systemOverviewSubtitle: 'Pemantauan dan manajemen waktu nyata.',
              cards: {
                activeUsers: 'Pengguna Aktif',
                systemHealth: 'Kesehatan Sistem',
                securityAlerts: 'Peringatan Keamanan',
                allSystemsOperational: 'Semua sistem operasional',
                noActiveThreats: 'Tidak ada ancaman aktif',
              },
              userManagement: 'Manajemen Pengguna',
              addUser: 'Tambah Pengguna',
              monitor: {
                cpu: 'BEBAN CPU',
                ram: 'PENGGUNAAN RAM',
                gpu: 'SUHU GPU',
              },
              config: {
                title: 'Konfigurasi Sistem',
                globalLimit: 'Batas Langganan Global',
                maxConn: 'KONEKSI MAKS',
                limitDesc: 'Batas keras untuk koneksi WebSocket bersamaan per node.',
                maintenance: {
                  label: 'Mode Pemeliharaan',
                  desc: 'Nonaktifkan semua akses non-admin segera.',
                },
                autoScale: {
                  label: 'Auto-Scaling',
                  desc: 'Putar kontainer baru saat CPU > 80%.',
                },
                rabbitmq: 'Status Antrian RabbitMQ',
              },
              table: {
                columns: {
                  user: 'ID Pengguna / Nama',
                  plan: 'Jenis Paket',
                  status: 'Status',
                  lastLogin: 'Login Terakhir',
                  actions: 'Aksi',
                },
                user: 'Pengguna',
                role: 'Peran',
                status: 'Status',
                action: 'Aksi',
                edit: 'Ubah',
                admin: 'Admin',
                userLabel: 'Pengguna',
                active: 'Aktif',
                suspended: 'Ditangguhkan',
                plans: {
                  enterprise: 'Enterprise',
                  pro: 'Pro',
                  starter: 'Pemula',
                },
              },
            },
            footer: {
              rights: '© {{year}} IoT Nexus. Hak cipta dilindungi undang-undang.',
              privacy: 'Kebijakan Privasi',
              terms: 'Ketentuan Layanan',
              support: 'Dukungan',
            },
          },
          services: {
            title: 'Layanan Kami',
            subtitle: 'Inovasi teknologi yang disesuaikan dengan kebutuhan industri Anda.',
            items: {
              iot: {
                name: 'Ekosistem Pintar',
                tagline: 'Konektivitas Tanpa Batas',
                description:
                  'Solusi IoT yang menghubungkan perangkat fisik dengan digital untuk efisiensi maksimal.',
                features: [
                  'Otomatisasi Rumah & Gedung',
                  'Sensor IoT Industri',
                  'Sistem Manajemen Energi',
                ],
              },
              ai: {
                name: 'AI & Data Intelijen',
                tagline: 'Kecerdasan Buatan Terdepan',
                description:
                  'Analisis data mendalam dan otomatisasi berbasis AI untuk keputusan bisnis yang lebih baik.',
                features: [
                  'Visi Komputer & Pengawasan',
                  'Analitik Prediktif',
                  'Pemrosesan Bahasa Alami',
                ],
              },
              software: {
                name: 'Software Enterprise',
                tagline: 'Sistem Terintegrasi',
                description:
                  'Pengembangan software custom yang menyatukan seluruh operasional bisnis Anda.',
                features: [
                  'Pengembangan ERP Kustom (Odoo)',
                  'Dashboard Intelijen Bisnis',
                  'Solusi Otomatisasi Alur Kerja',
                ],
              },
            },
          },
          hero: {
            badge: 'Solusi Teknologi Full-Stack',
            title: 'Masa Depan Bisnis Anda:',
            titleHighlight: 'Cerdas, Terintegrasi, & Aman',
            subtitle:
              'Optimalkan operasional dengan sinergi IoT, AI, dan Software Enterprise dalam satu ekosistem Private Cloud yang andal.',
            ctaPrimary: 'Mulai Transformasi',
            ctaSecondary: 'Pelajari Layanan',
            stats: {
              uptime: 'Uptime',
              latency: 'Latensi',
              onPrem: 'On-Prem',
            },
            visualization: {
              roboticArm: 'LENGAN ROBOT 04',
              efficiency: 'Efisiensi',
              temp: 'Suhu',
              load: 'Beban',
              aiAutoPilot: 'AUTOPILOT AI: AKTIF',
              camera: 'CAM-PABRIK-02',
            },
          },
          bentoGrid: {
            title: 'Solusi untuk',
            titleHighlight: 'Masalah Anda',
            subtitle: 'Jangan biarkan kendala teknis menghambat potensi bisnis Anda.',
            problemLabel: 'Masalah',
            solutionLabel: 'Solusi',
            items: {
              efficiency: {
                problem: 'Bisnis Tidak Efisien',
                solution: 'Otomatisasi Cerdas',
                description:
                  'Proses manual yang lambat menghambat pertumbuhan. Kami hadirkan otomatisasi AI untuk percepatan bisnis.',
                stat: '50% Lebih Cepat',
              },
              security: {
                problem: 'Data Tidak Aman',
                solution: 'Private Cloud',
                description:
                  'Kebocoran data adalah ancaman nyata. Infrastruktur server mandiri kami menjamin kedaulatan data Anda.',
                stat: '100% Aman',
              },
              integration: {
                problem: 'Teknologi Terpisah',
                solution: 'Ekosistem Terintegrasi',
                description:
                  'Sistem yang tidak saling bicara bikin pusing. Solusi kami menyatukan Hardware, Software, dan AI.',
                stat: 'All-in-One',
              },
            },
          },
          infrastructure: {
            title: 'Kenapa Memilih',
            titleHighlight: 'Kami?',
            subtitle: 'Kombinasi keamanan, integrasi, dan skalabilitas untuk bisnis masa depan.',
            privateCloud: '[ PRIVATE CLOUD ]',
            securityLabel: 'Security: MAX HOLDOUT',
            accessLabel: 'Access: RESTRICTED',
            items: {
              privacy: {
                title: 'Data Privacy (Server Lokal)',
                description:
                  'Data Anda adalah aset berharga. Kami menyimpannya di infrastruktur privat yang aman, bukan di cloud publik.',
              },
              integration: {
                title: 'End-to-End Integration',
                description:
                  'Sinergi sempurna antara Hardware (IoT), Software (ERP), dan AI dalam satu ekosistem terpadu.',
              },
              scalable: {
                title: 'Scalable Tech',
                description:
                  'Teknologi yang siap tumbuh bersama bisnis Anda. Dari skala kecil hingga enterprise, tanpa hambatan.',
              },
            },
          },
          products: {
            title: 'Produk',
            titleHighlight: 'Unggulan',
            subtitle: 'Bukti nyata inovasi kami dalam industri peternakan dan hunian pintar.',
            poultry: {
              title: 'Smart Poultry System',
              description:
                'Sistem pemantauan kandang cerdas berbasis IoT yang memantau suhu, kelembaban, dan kadar amonia secara real-time. Dilengkapi analisis mortalitas otomatis untuk meningkatkan hasil panen.',
              status: 'STATUS: TERHUBUNG',
            },
            smartHome: {
              title: 'Unified Smart Home',
              description:
                'Integrasi penuh sistem keamanan, pencahayaan, dan efisiensi energi dalam satu aplikasi. Kontrol suara intuitif dan otomatisasi berbasis kebiasaan penghuni.',
              status: 'MODE AI: AKTIF',
            },
          },
          techStack: {
            title: 'Didukung Teknologi Terkini',
            subtitle:
              'Kami menggunakan stack teknologi modern untuk menjamin performa, keamanan, dan skalabilitas.',
          },
          footer: {
            cta: {
              title: 'Siap Mengubah Bisnis Anda?',
              subtitle:
                'Jangan biarkan kompetitor mendahului Anda. Mari diskusikan solusi teknologi terbaik untuk efisiensi dan pertumbuhan bisnis Anda hari ini.',
              button: 'Konsultasi Gratis Sekarang',
            },
            brand: {
              tagline: 'Solusi Full-Stack',
              description: 'Mitra teknologi terpercaya untuk IoT, AI, dan Software Enterprise.',
              status: 'Sistem Operasional',
            },
            sections: {
              services: 'LAYANAN',
              company: 'PERUSAHAAN',
              connect: 'HUBUNGI',
            },
            servicesLinks: {
              smartEcosystems: 'Ekosistem Pintar',
              aiIntelligence: 'AI Intelijen',
              microApis: 'Micro-APIs',
              customSolutions: 'Solusi Kustom',
            },
            companyLinks: {
              about: 'Tentang Kami',
              caseStudies: 'Studi Kasus',
              documentation: 'Dokumentasi',
              contact: 'Kontak',
            },
            copyright: '© 2026 S.T.S Labs. Semua sistem operasional.',
            statusOnline: 'STATUS: ONLINE',
            uptime: 'UPTIME: 99.94%',
          },
          nav: {
            home: 'Beranda',
            solutions: 'Solusi',
            services: 'Layanan',
            whyUs: 'Keunggulan',
            products: 'Produk',
            tech: 'Teknologi',
            consultation: 'Konsultasi Gratis',
            contact: 'Kontak',
            startHere: 'Mulai Dari Sini',
            dashboard: 'Dasbor',
          },
          language: 'Bahasa',
        },
      },
    },
  });

export default i18n;
