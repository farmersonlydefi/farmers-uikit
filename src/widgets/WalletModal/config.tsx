import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  }
];

export default connectors;
export const connectorLocalStorageKey = "accountStatus";
