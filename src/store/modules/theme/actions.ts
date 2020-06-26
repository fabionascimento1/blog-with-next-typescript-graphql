export default function changeTheme(theme: string) {
  return {
    type: "CHANGE_THEME",
    theme,
  };
}
