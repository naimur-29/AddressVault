// importing icons:
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="flex items-center justify-between py-1 rounded-md _user">
      {/* User Info/Profile */}
      <div className="flex items-center gap-2 _user-info">
        <div className="w-8 overflow-hidden bg-[primary-violet-op77] rounded-full aspect-square flex items-center">
          <img
            src="https://www.wallpaperflare.com/static/218/678/406/digital-art-anime-girls-fantasy-art-artwork-wallpaper.jpg"
            alt="Profile"
            className="object-cover object-center w-full h-full rounded-full bg-[primary-violet-op77]"
          />
        </div>
        <p className="text-[--primary-text-slate] font-semibold font-mono translate-y-[2px]">
          User Name
        </p>
      </div>

      {/* Settings */}
      <button className="text-[--primary-violet-light] hover:rotate-90 hover:scale-110 duration-500 active:scale-90">
        <SettingsIcon />
      </button>
    </div>
  );
};

export default Settings;
