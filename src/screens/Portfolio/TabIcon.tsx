// @flow
import React from "react";
import { WalletMedium } from "@ledgerhq/native-ui/assets/icons";

import TabIcon from "../../components/TabIcon";

export default function PortfolioTabIcon(props: any) {
  return <TabIcon Icon={WalletMedium} i18nKey="tabs.portfolio" {...props} />;
}
