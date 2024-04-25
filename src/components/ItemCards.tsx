import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { calculateDuration } from "@/utils/dateUtils";

// Used in tileCard
export function ListItemRow({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex flex-row justify-start">
      <div className="flex items-center">
        <p className={"font-medium text-start text-xl textTheme"}>{icon}</p>
        <p className={"pl-4 font-medium text-start text-sm textTheme"}>
          {title}
        </p>
      </div>
    </div>
  );
}

// Used in About page
const tileCard = ({
  title,
  description,
  listItems,
}: {
  title: string;
  description: string;
  listItems?: any;
}) => {
  return (
    <div className="p-5 w-full rounded-xl cardDarkerTheme">
      <p className="pageSubtitleTheme">{title}</p>
      <p className="pt-5 text-base font-normal text-start textSecondaryTheme">
        {description}
      </p>
      {listItems ? (
        <div className="pt-5 flex flex-col gap-2">
          {listItems.map((item: any) => (
            <ListItemRow icon={item.icon} title={item.title} key={item.title} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

// Used in Education page, Experience page
const iconCard = ({ listItems, page }: { listItems: any; page: string }) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 sm:grid-row-2 gap-4 md:gap-6">
      {listItems.map((item: any, index: any) => (
        <div
          className="p-5 flex flex-row rounded-xl cardDarkerButtonTheme"
          key={index}
        >
          <div className="flex flex-shrink-0">
            <Link
              href={item.link}
              aria-label={`Link to ${item.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="textButtonTheme transitionButtonTheme"
              key={index}
            >
              <Image
                src={`/svg/${item.image}.svg`}
                alt={`Image of the ${item.institute}`}
                width={100}
                height={100}
                priority
              />
            </Link>
          </div>
          <div className="ml-5 flex-flex-col">
            <p className="text-base font-semibold textTheme">
              {page === "Education"
                ? item.course
                : page === "Experience" || page === "Media"
                ? item.title
                : page === "Volunteering"
                ? item.org
                : ""}
            </p>
            <p className="pt-0 text-base font-normal text-start textSecondaryTheme">
              {page === "Education"
                ? item.institute
                : page === "Experience" || page === "Media"
                ? item.org
                : page === "Volunteering"
                ? item.title
                : ""}
            </p>
            <p className="pt-0 text-sm font-normal text-start textSecondaryTheme">
              {item.years}
              <span className="hidden md:inline">
                {" "}
                · {calculateDuration(item.years)}
              </span>
            </p>
            <p className="pt-0 text-sm font-normal text-start textSecondaryTheme">
              {page === "Media" ? item.handler : item.location}
            </p>
            {item.status ? <hr className="mt-2 mb-2 divider" /> : <></>}
            <p className="pt-1 text-sm font-normal text-start textSecondaryTheme">
              {item.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Used in Experience page: Projects
const projectSmallCard = ({ listItems }: { listItems: any }) => {
  const top4Items = listItems.slice(0, 4);

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 sm:grid-row-2 gap-4 md:gap-6">
      {top4Items.map((item: any, index: any) => (
        <div
          key={index}
          className="mt-2 rounded-xl overflow-hidden cardDarkerButtonTheme"
        >
          <Image
            src={`/webp/${item.image}.webp`}
            alt={`Image of the ${item.title}`}
            height={300}
            width={400}
          />
          <div className="px-6 py-4">
            <div className="text-md font-semibold textTheme">{item.title}</div>
            <p className="pt-2 textSecondaryTheme text-sm">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Used in Experience page: Tools & Technologies
const toolsSmallCard = ({ listItems }: { listItems: any }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-4 justify-center">
      {listItems.map((item: any, index: any) => (
        <div
          key={index}
          className="mt-2 p-2 flex items-center text-center rounded-xl overflow-hidden cardDarkerButtonTheme"
        >
          <Image
            src={`/svg/tools/${item.image}.svg`}
            alt={`Image of the ${item.title}`}
            className="mr-2 hidden dark:block"
            width={24}
            height={24}
          />
          <Image
            src={`/svg/tools/${item.imageL}.svg`}
            alt={`Image of the ${item.title}`}
            className="mr-2 dark:hidden block"
            width={24}
            height={24}
          />
          <p className="textSecondaryTheme text-sm">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

// Used in Media page
const bannerCard = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="relative pb-5 mt-10 xs:h-52 sm:h-64 md:h-80 lg:h-80 rounded-xl">
      <Image
        alt="Image of the media banner"
        src={imageSrc}
        fill
        quality={100}
        sizes="100vw, 100vw"
        className="object-cover rounded-xl"
        placeholder="blur"
        priority
        loading="eager"
      />
    </div>
  );
};

// Used in Connect page
type IconType =
  | typeof FaEnvelope
  | typeof FaGithub
  | typeof FaXTwitter
  | typeof FaXTwitter
  | typeof FaInstagram;

// Used in Connect page
function getIconComponent(iconName: String): IconType {
  switch (iconName) {
    case "email":
      return FaEnvelope;
    case "github":
      return FaGithub;
    case "linkedin":
      return FaLinkedin;
    case "xtwitter":
      return FaXTwitter;
    case "youtube":
      return FaYoutube;
    case "instagram":
      return FaInstagram;
    default:
      throw new Error(`Invalid icon name: ${iconName}`);
  }
}

// Used in Connect page
const connectChannelCard = ({ listItems }: { listItems: any }) => {
  return (
    <div className="grid sm:grid-rows-3 sm:grid-flow-col md:grid-rows-3 md:grid-flow-col lg:grid-rows-3 lg:grid-flow-col gap-4">
      {listItems.map((item: any, index: any) => {
        const ChannelIcon = getIconComponent(item.icon);
        return (
          <Link
            href={item.link}
            aria-label={`Link to ${item.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="textButtonTheme transitionButtonTheme"
            key={index}
          >
            <div
              className="p-5 flex flex-col justify-center items-center rounded-xl w-full min-w-[260px] cardDarkerButtonTheme"
              key={index}
            >
              <ChannelIcon size={28} />
              <p className="pt-2 text-md font-medium textTheme">{item.title}</p>
              <p className="pt-2 text-sm font-normal text-start textSecondaryTheme">
                {item.handler}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

// const statusCard = ({
//   status,
//   message,
// }: {
//   status: string;
//   message: string;
// }) => {
//   return (
//     <div className="text-center py-4 lg:px-4">
//       <div className="p-2 rounded-xl bg-green-800 bg-opacity-40 backdrop-blur items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex">
//         <span className="px-2 py-1 mr-3 flex rounded-full bg-green-600 bg-opacity-40 uppercase text-xs font-semibold">
//           {status}
//         </span>
//         <span className="mr-2 text-sm font-normal text-left flex-auto">
//           {message}
//         </span>
//       </div>
//     </div>
//   );
// };

const ItemCards = {
  tileCard,
  iconCard,
  projectSmallCard,
  toolsSmallCard,
  bannerCard,
  connectChannelCard,
  // statusCard,
};

export default ItemCards;
