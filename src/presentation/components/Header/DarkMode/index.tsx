import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import changeTheme from "@store/modules/theme/actions";

interface ITheme {
  theme: string;
}

function DarkMode() {
  const typedThemeSelector: TypedUseSelectorHook<ITheme> = useSelector;
  const _theme = typedThemeSelector((state) => state.theme);

  const dispatch = useDispatch();

  function ChangeTheme() {
    const { theme } = _theme;

    if (theme === "dark") dispatch(changeTheme("light"));
    else dispatch(changeTheme("dark"));
  }

  return (
    <>
      <button onClick={ChangeTheme}>Change Theme</button>
    </>
  );
}

export default DarkMode;
