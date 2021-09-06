// @flow
import React from "react";
import { Linking, StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import LText from "../../components/LText";
import BottomModal from "../../components/BottomModal";
import { urls } from "../../config/urls";
import ExternalLink from "../../components/ExternalLink";

export default function AccountSubHeaderDrawer({ isOpen, onClose }: Props) {
  const { t } = useTranslation();
  return (
    <BottomModal
      id="elrond-more-info-modal"
      isOpened={isOpen}
      onClose={onClose}
    >
      <View style={styles.container}>
        <LText style={styles.drawerTitle}>
          {t("elrond.account.subHeader.drawerTitle")}
        </LText>
        <LText style={styles.title}>
          {t("elrond.account.subHeader.title")}
        </LText>
        <LText style={styles.description}>
          {t("elrond.account.subHeader.description")}
        </LText>
        <LText style={styles.description}>
          {t("elrond.account.subHeader.description2")}
        </LText>
        <LText style={styles.description}>
          {t("elrond.account.subHeader.description3")}
        </LText>
        <View style={styles.linkContainer}>
          <LText style={styles.linkTitle}>
            {t("elrond.account.subHeader.website.title")}
          </LText>
          <ExternalLink
            text={t("elrond.account.subHeader.website.linkTitle")}
            onPress={() => Linking.openURL(urls.elrond.website)}
            fontSize={14}
          />
        </View>
        <View style={styles.linkContainer}>
          <LText style={styles.linkTitle}>
            {t("elrond.account.subHeader.github.title")}
          </LText>
          <ExternalLink
            text={t("elrond.account.subHeader.github.linkTitle")}
            onPress={() => Linking.openURL(urls.elrond.github)}
            fontSize={14}
          />
        </View>
        <View style={styles.linkContainer}>
          <LText style={styles.linkTitle}>
            {t("elrond.account.subHeader.twitter.title")}
          </LText>
          <ExternalLink
            text={t("elrond.account.subHeader.twitter.linkTitle")}
            onPress={() => Linking.openURL(urls.elrond.twitter)}
            fontSize={14}
          />
        </View>
      </View>
    </BottomModal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  drawerTitle: {
    fontSize: 22,
    textAlign: "center",
    paddingBottom: 16,
    fontWeight: "900",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    fontWeight: "400",
    paddingVertical: 8,
  },
  linkContainer: {
    marginVertical: 10,
    display: "flex",
    alignItems: "flex-start",
  },
  linkTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
  },
});
