interface InterfaceInicitialState {
  theme: string;
}

const InitialState: InterfaceInicitialState = {
  theme: "dark",
};

export default function theme(
  state = InitialState,
  action: any
): InterfaceInicitialState {
  switch (action.type) {
    case "CHANGE_THEME":
      return { theme: action.theme };
    default:
      return state;
  }
}