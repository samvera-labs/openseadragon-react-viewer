// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPen,
  faSave,
  faTrash,
  faSearchPlus,
  faSearchMinus,
  faExpand,
  faDownload,
  faArrowCircleLeft,
  faArrowCircleRight,
  faHome
} from "@fortawesome/free-solid-svg-icons";

export default function registerIcons() {
  library.add(
    faPen,
    faSave,
    faTrash,
    faSearchPlus,
    faSearchMinus,
    faExpand,
    faDownload,
    faArrowCircleLeft,
    faArrowCircleRight,
    faHome
  );
}
