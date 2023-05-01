import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#D59516] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#D59516] mr-2" />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
