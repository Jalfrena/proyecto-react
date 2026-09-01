/* eslint-disable react-refresh/only-export-components */
import {
  Search as LucideSearch,
  Menu as LucideMenu,
  ChevronDown as LucideChevronDown,
  ChevronRight as LucideChevronRight,
  Star as LucideStar,
  Calculator as LucideCalculator,
  BookOpen as LucideBookOpen,
  Building as LucideBuilding,
  MessageCircle as LucideMessageCircle,
  CheckCircle as LucideCheckCircle,
  AlertTriangle as LucideAlertTriangle,
  Loader as LucideLoader,
  X as LucideX,
  ChevronLeft as LucideChevronLeft,
  ArrowRight as LucideArrowRight,
  ExternalLink as LucideExternalLink,
  Download as LucideDownload,
  Upload as LucideUpload,
  Filter as LucideFilter,
  ArrowUpDown as LucideArrowUpDown,
  Send as LucideSend,
  Sparkles as LucideSparkles,
  Eye as LucideEye,
  EyeOff as LucideEyeOff,
  Sun as LucideSun,
  Moon as LucideMoon,
  Home as LucideHome,
  BarChart as LucideBarChart,
  CreditCard as LucideCreditCard,
  HelpCircle as LucideHelpCircle,
  Settings as LucideSettings,
  User as LucideUser,
  LogOut as LucideLogOut,
  Bell as LucideBell,
  Mail as LucideMail,
  Phone as LucidePhone,
  MapPin as LucideMapPin,
  Globe as LucideGlobe,
  Lock as LucideLock,
  Unlock as LucideUnlock,
  Trash2 as LucideTrash2,
  Edit as LucideEdit,
  Plus as LucidePlus,
  Minus as LucideMinus,
  Copy as LucideCopy,
  Share2 as LucideShare2,
  Heart as LucideHeart,
  Bookmark as LucideBookmark,
  Flag as LucideFlag,
  Info as LucideInfo,
  AlertCircle as LucideAlertCircle,
  Check as LucideCheck,
  XCircle as LucideXCircle,
  ChevronUp as LucideChevronUp,
  MoreHorizontal as LucideMoreHorizontal,
  MoreVertical as LucideMoreVertical,
} from 'lucide-react';

import styles from './CompassIcons.module.css';
import { createIcon } from './createIcon.jsx';

export const Search = createIcon(LucideSearch);
export const Menu = createIcon(LucideMenu);
export const ChevronDown = createIcon(LucideChevronDown);
export const ChevronRight = createIcon(LucideChevronRight);
export const Star = createIcon(LucideStar);
export const Calculator = createIcon(LucideCalculator);
export const BookOpen = createIcon(LucideBookOpen);
export const Building = createIcon(LucideBuilding);
export const MessageCircle = createIcon(LucideMessageCircle);
export const CheckCircle = createIcon(LucideCheckCircle);
export const AlertTriangle = createIcon(LucideAlertTriangle);
export const Loader = createIcon(LucideLoader);
export const X = createIcon(LucideX);
export const ChevronLeft = createIcon(LucideChevronLeft);
export const ArrowRight = createIcon(LucideArrowRight);
export const ExternalLink = createIcon(LucideExternalLink);
export const Download = createIcon(LucideDownload);
export const Upload = createIcon(LucideUpload);
export const Filter = createIcon(LucideFilter);
export const Sort = createIcon(LucideArrowUpDown);
export const Send = createIcon(LucideSend);
export const Sparkles = createIcon(LucideSparkles);
export const Eye = createIcon(LucideEye);
export const EyeOff = createIcon(LucideEyeOff);
export const Sun = createIcon(LucideSun);
export const Moon = createIcon(LucideMoon);
export const Home = createIcon(LucideHome);
export const BarChart = createIcon(LucideBarChart);
export const CreditCard = createIcon(LucideCreditCard);
export const HelpCircle = createIcon(LucideHelpCircle);
export const Settings = createIcon(LucideSettings);
export const User = createIcon(LucideUser);
export const LogOut = createIcon(LucideLogOut);
export const Bell = createIcon(LucideBell);
export const Mail = createIcon(LucideMail);
export const Phone = createIcon(LucidePhone);
export const MapPin = createIcon(LucideMapPin);
export const Globe = createIcon(LucideGlobe);
export const Lock = createIcon(LucideLock);
export const Unlock = createIcon(LucideUnlock);
export const Trash2 = createIcon(LucideTrash2);
export const Edit = createIcon(LucideEdit);
export const Plus = createIcon(LucidePlus);
export const Minus = createIcon(LucideMinus);
export const Copy = createIcon(LucideCopy);
export const Share2 = createIcon(LucideShare2);
export const Heart = createIcon(LucideHeart);
export const Bookmark = createIcon(LucideBookmark);
export const Flag = createIcon(LucideFlag);
export const Info = createIcon(LucideInfo);
export const AlertCircle = createIcon(LucideAlertCircle);
export const Check = createIcon(LucideCheck);
export const XCircle = createIcon(LucideXCircle);
export const ChevronUp = createIcon(LucideChevronUp);
export const MoreHorizontal = createIcon(LucideMoreHorizontal);
export const MoreVertical = createIcon(LucideMoreVertical);

export const CompassNeedle = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12 2L13.09 8.26L19.78 9.21L14.63 13.8L15.89 20.5L12 17L8.11 20.5L9.37 13.8L4.22 9.21L10.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2V4.5"
      stroke="var(--color-secondary)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 19.5V22"
      stroke="var(--color-accent)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CompassStar = ({ size = 20, className = '', filled = false, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12 2L13.09 8.26L19.78 9.21L14.63 13.8L15.89 20.5L12 17L8.11 20.5L9.37 13.8L4.22 9.21L10.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CompassSpin = ({ size = 24, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${styles.compassSpin}`}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12 2L13.09 8.26L19.78 9.21L14.63 13.8L15.89 20.5L12 17L8.11 20.5L9.37 13.8L4.22 9.21L10.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2V4.5"
      stroke="var(--color-secondary)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 19.5V22"
      stroke="var(--color-accent)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CompassBuilding = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M3 21h18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 21V13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 21V13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 4L14 8H10L12 4Z"
      stroke="var(--color-secondary)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CompassBook = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 3v4"
      stroke="var(--color-secondary)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CompassCalculator = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 8h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="18" cy="5" r="1.5" fill="var(--color-secondary)"/>
  </svg>
);

export const CompassChat = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9v4"
      stroke="var(--color-secondary)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CompassCheck = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path
      d="M8 12l3 3 5-5"
      stroke="var(--color-success)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CompassAlert = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9v4"
      stroke="var(--color-warning)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="17" r="1" fill="var(--color-warning)"/>
  </svg>
);

export const LogoB = ({ size = 32, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
      fill="var(--color-primary)"
    />
    <path
      d="M12 9.5v25M12 9.5l5 5M12 9.5l-5 5"
      stroke="var(--color-secondary)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 9.5v25M36 9.5l-5 5M36 9.5l5 5"
      stroke="var(--color-accent)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="22.5" r="2" fill="var(--color-primary)"/>
  </svg>
);

export const LogoBMinimal = ({ size = 24, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M4 4v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4H4zm8 0v16"
      stroke="var(--color-primary)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 4v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h-8zm8 0v16"
      stroke="var(--color-primary)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8v8M12 8l3 3M12 8l-3 3"
      stroke="var(--color-secondary)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 8v8M20 8l-3 3M20 8l3 3"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="12" r="1.5" fill="var(--color-primary)"/>
  </svg>
);

export default {
  Search,
  Menu,
  ChevronDown,
  ChevronRight,
  Star,
  Calculator,
  BookOpen,
  Building,
  MessageCircle,
  CheckCircle,
  AlertTriangle,
  Loader,
  X,
  ChevronLeft,
  ArrowRight,
  ExternalLink,
  Download,
  Upload,
  Filter,
  Sort,
  Send,
  Sparkles,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Home,
  BarChart,
  CreditCard,
  HelpCircle,
  Settings,
  User,
  LogOut,
  Bell,
  Mail,
  Phone,
  MapPin,
  Globe,
  Lock,
  Unlock,
  Trash2,
  Edit,
  Plus,
  Minus,
  Copy,
  Share2,
  Heart,
  Bookmark,
  Flag,
  Info,
  AlertCircle,
  Check,
  XCircle,
  ChevronUp,
  MoreHorizontal,
  MoreVertical,
  CompassNeedle,
  CompassStar,
  CompassSpin,
  CompassBuilding,
  CompassBook,
  CompassCalculator,
  CompassChat,
  CompassCheck,
  CompassAlert,
  LogoB,
  LogoBMinimal,
};
