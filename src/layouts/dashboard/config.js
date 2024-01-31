import {
  ChartBarIcon,
  UserIcon,
  CalendarDaysIcon,
  DocumentCheckIcon,
  CpuChipIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import CreateIcon from "@mui/icons-material/Create";
import CalculateIcon from "@mui/icons-material/Calculate";
import {
  Warehouse,
  AutoStories,
  Group,
  Add,
  Settings,
  AirlineStopsOutlined,
  FlightTakeoff,
  BakeryDining,
  AccountBalanceWallet,
  Language,
  Draw,
  Class,
  Folder,
  FolderCopy,
  CalendarMonth,
  ReceiptLong,
  ContactPhone,
  BusinessCenter,
  Business,
  DoorSliding,
  AssignmentTurnedIn,
  NoteAdd,
  NoteAlt,
  HistoryEdu,
  DevicesOther,
  School,
  MenuBook,
  Article,
  FeaturedVideo,
  Category,
  RememberMe,
  Comment,
  LocalOffer,
  Insights,
  ChromeReaderMode,
  MarkChatUnread,
  FiberNew,
  Flag,
  VideoCameraBack,
  Assistant,
  Psychology,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

export const items = [
  {
    title: "Tổng quan",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Tin tức",
    path: "/news",
    icon: (
      <SvgIcon fontSize="small">
        <Article />
      </SvgIcon>
    ),
  },
  {
    title: "Quảng cáo",
    path: "/advertisement",
    icon: (
      <SvgIcon fontSize="small">
        <FeaturedVideo />
      </SvgIcon>
    ),
  },
  {
    title: "Kho dữ liệu",
    path: "/data-repository",
    icon: (
      <SvgIcon fontSize="small">
        <FolderCopy />
      </SvgIcon>
    ),
  },
  {
    title: "Nhuận bút",
    path: "/editorial",
    icon: (
      <SvgIcon fontSize="small">
        <Draw />
      </SvgIcon>
    ),
  },
  {
    title: "Công ty",
    path: "/company",
    icon: (
      <SvgIcon fontSize="small">
        <Business />
      </SvgIcon>
    ),
  },
  {
    title: "Phòng ban",
    path: "/department",
    icon: (
      <SvgIcon fontSize="small">
        <DoorSliding />
      </SvgIcon>
    ),
  },
  {
    title: "Nhân sự",
    path: "/employee",
    icon: (
      <SvgIcon fontSize="small">
        <Group />
      </SvgIcon>
    ),
  },
  {
    title: "Báo cáo",
    path: "/report",
    icon: (
      <SvgIcon fontSize="small">
        <ReceiptLong />
      </SvgIcon>
    ),

  },
  {
    title: "Hạng mục",
    path: "/category",
    icon: (
      <SvgIcon fontSize="small">
        <Category />
      </SvgIcon>
    ),

  },
  {
    title: "Member",
    path: "/member",
    icon: (
      <SvgIcon fontSize="small">
        <RememberMe />
      </SvgIcon>
    ),

  },
  {
    title: "Social",
    path: "/social",
    icon: (
      <SvgIcon fontSize="small">
        <Language />
      </SvgIcon>
    ),

  },
  {
    title: "Bình luận",
    path: "/comment",
    icon: (
      <SvgIcon fontSize="small">
        <Comment />
      </SvgIcon>
    ),

  },

  {
    title: "Tag",
    path: "/tag",
    icon: (
      <SvgIcon fontSize="small">
        <LocalOffer />
      </SvgIcon>
    ),

  },
  {
    title: "Thời tiết - Tỷ giá",
    path: "/examination",
    icon: (
      <SvgIcon fontSize="small">
        <School />
      </SvgIcon>
    ),

  },
  {
    title: "Infographic ",
    path: "/infographic",
    icon: (
      <SvgIcon fontSize="small">
        <Insights />
      </SvgIcon>
    ),

  },
  {
    title: "Đọc nhiều nhất",
    path: "/most-read",
    icon: (
      <SvgIcon fontSize="small">
        <ChromeReaderMode />
      </SvgIcon>
    ),

  },
  {
    title: "Bình luận nhiều nhất",
    path: "/most-commented",
    icon: (
      <SvgIcon fontSize="small">
        <MarkChatUnread />
      </SvgIcon>
    ),

  },
  {
    title: "Mới nhất",
    path: "/newest",
    icon: (
      <SvgIcon fontSize="small">
        <FiberNew />
      </SvgIcon>
    ),

  },
  {
    title: "Khu vực",
    path: "/area",
    icon: (
      <SvgIcon fontSize="small">
        <Flag />
      </SvgIcon>
    ),

  },
  {
    title: "Tin video, hình ảnh",
    path: "/video-and-photo",
    icon: (
      <SvgIcon fontSize="small">
        <VideoCameraBack />
      </SvgIcon>
    ),

  },
  {
    title: "Gợi ý",
    path: "/suggestion",
    icon: (
      <SvgIcon fontSize="small">
        <Assistant />
      </SvgIcon>
    ),

  },
  {
    title: "Liên kết AI",
    path: "/ai",
    icon: (
      <SvgIcon fontSize="small">
        <Psychology />
      </SvgIcon>
    ),

  },

  {
    title: "Cấu hình",
    icon: (
      <SvgIcon fontSize="small">
        <Settings />
      </SvgIcon>
    ),
    submenu: [
      {
        title: "Cấu hình chung",
        path: "/setting",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    title: "Hệ thống",
    path: "/system",
    icon: (
      <SvgIcon fontSize="small">
        <CpuChipIcon />
      </SvgIcon>
    ),
    submenu: [
      {
        title: "Phân quyền hệ thống",
        path: "/system/role-system",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Module",
        path: "/system/module",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
      {
        title: "Chức năng",
        path: "/system/feature",
        icon: (
          <SvgIcon fontSize="small">
            <Add />
          </SvgIcon>
        ),
      },
    ]
  },
];
