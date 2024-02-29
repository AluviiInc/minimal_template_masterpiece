// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  blog: icon('ic_blog'),
  cart: icon('ic_cart'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  house: icon('ic_house'),
  gear: icon('ic_gear'),
  orders: icon('ic_orders'),
  customers: icon('ic_customers'),
  catalog: icon('ic_catalog'),
  team: icon('ic_team'),
  apps: icon('ic_apps'),
  reports: icon('ic_reports'),
};

const navConfig = [
  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      // DASHBOARD
      {
        title: 'dashboard',
        path: PATH_DASHBOARD.main.root,
        icon: ICONS.house,
        children: [
          { title: 'dashboard', path: PATH_DASHBOARD.main.index },
          { title: 'check-in', path: PATH_DASHBOARD.main.checkIn },
        ],
      },

      // ORDERS
      {
        title: 'orders',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.orders,
        children: [
          { title: 'orders', path: PATH_DASHBOARD.eCommerce.shop },
          { title: 'tickets', path: PATH_DASHBOARD.eCommerce.demoView },
          { title: 'memberships', path: PATH_DASHBOARD.eCommerce.list },
          { title: 'bookings', path: PATH_DASHBOARD.eCommerce.new },
          { title: 'gift cards', path: PATH_DASHBOARD.eCommerce.demoEdit },
          { title: 'rentals', path: PATH_DASHBOARD.eCommerce.checkout },
          { title: 'game cards', path: PATH_DASHBOARD.eCommerce.checkout },
        ],
      },

      // CUSTOMERS
      {
        title: 'customers',
        path: PATH_DASHBOARD.invoice.root,
        icon: ICONS.customers,
        children: [
          { title: 'customer list', path: PATH_DASHBOARD.invoice.list },
          
        ],
      },

      // CATALOG
      {
        title: 'catalog',
        path: PATH_DASHBOARD.blog.root,
        icon: ICONS.catalog,
        children: [
          { title: 'items', path: PATH_DASHBOARD.blog.posts },
          { title: 'categories', path: PATH_DASHBOARD.blog.demoView },
          { title: 'modifiers', path: PATH_DASHBOARD.blog.new },
          { title: 'inventory', path: PATH_DASHBOARD.blog.new },
          { title: 'discounts', path: PATH_DASHBOARD.blog.new },
          { title: 'schedules', path: PATH_DASHBOARD.blog.new },
          { title: 'assets', path: PATH_DASHBOARD.blog.new },
          { title: 'register setup', path: PATH_DASHBOARD.blog.new },
        ],
      },

      // TEAM
      {
        title: 'team',
        path: PATH_DASHBOARD.invoice.root,
        icon: ICONS.team,
        children: [
          { title: 'users', path: PATH_DASHBOARD.invoice.list },
          { title: 'roles', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'time cards', path: PATH_DASHBOARD.invoice.new },
          { title: 'tills', path: PATH_DASHBOARD.invoice.demoEdit },
        ],
      },

      // APPS
      {
        title: 'apps',
        path: PATH_DASHBOARD.invoice.root,
        icon: ICONS.apps,
        children: [
          { title: 'pos registers', path: PATH_DASHBOARD.invoice.list },
          { title: 'clock in / out', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'kitchen display', path: PATH_DASHBOARD.invoice.new },
          { title: 'ecommerce', path: PATH_DASHBOARD.invoice.demoEdit },
          { title: 'access control', path: PATH_DASHBOARD.invoice.demoEdit },
          { title: 'self-service kiosk', path: PATH_DASHBOARD.invoice.demoEdit },
          { title: 'arcade redemption', path: PATH_DASHBOARD.invoice.demoEdit },
        ],
      },

      // REPORTS
      {
        title: 'reports',
        path: PATH_DASHBOARD.invoice.root,
        icon: ICONS.reports,
        children: [
          { title: 'reports', path: PATH_DASHBOARD.invoice.list },
          
        ],
      },

      // ADMIN
      {
        title: 'admin',
        path: PATH_DASHBOARD.invoice.root,
        icon: ICONS.gear,
        children: [
          { title: 'calendars', path: PATH_DASHBOARD.invoice.list },
          { title: 'sales tax', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'accounting codes', path: PATH_DASHBOARD.invoice.new },
          { title: 'waiver forms', path: PATH_DASHBOARD.invoice.demoEdit },
          { title: 'receipt templates', path: PATH_DASHBOARD.invoice.list },
          { title: 'organizational units', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'currencies', path: PATH_DASHBOARD.invoice.new },
          { title: 'hardware', path: PATH_DASHBOARD.invoice.demoEdit },
          { title: 'configuration', path: PATH_DASHBOARD.invoice.list },
          { title: 'integrations', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'games', path: PATH_DASHBOARD.invoice.new },
          { title: 'ticket templates', path: PATH_DASHBOARD.invoice.demoEdit },
          { title: 'ticket types', path: PATH_DASHBOARD.invoice.list },
          { title: 'entitlements', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'system configuration', path: PATH_DASHBOARD.invoice.new },
        ],
      },
    ],
  },
];

export default navConfig;
