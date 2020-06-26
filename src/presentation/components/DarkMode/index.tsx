import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import changeTheme from "@store/modules/theme/actions";

import { ITheme } from "@utils/interfaces";

import { DarkMode_ } from "./styles";

function DarkMode() {
  const typedThemeSelector: TypedUseSelectorHook<ITheme> = useSelector;
  const _theme = typedThemeSelector((state) => state.theme);
  const { theme } = _theme;

  let _viewLabelTheme = theme;

  if (theme === "dark") _viewLabelTheme = "Light";
  else _viewLabelTheme = "Dark";

  const dispatch = useDispatch();

  function ChangeTheme() {
    if (theme === "dark") dispatch(changeTheme("light"));
    else dispatch(changeTheme("dark"));
  }

  return (
    <DarkMode_>
      <button onClick={ChangeTheme} className={_viewLabelTheme}>
        Mudar o Tema para {_viewLabelTheme}
      </button>
    </DarkMode_>
  );
}

export default DarkMode;
