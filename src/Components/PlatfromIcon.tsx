import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaWindows, FaChrome } from "react-icons/fa";

interface PlatformIconProps {
  platform: string;
}

const PlatformIcon = ({ platform }: PlatformIconProps) => {
  const iconMap: { [key: string]: IconType } = {
    "PC (Windows)": FaWindows,
    "Web Browser": FaChrome,
  };

  // Split the platform string, trim spaces, and map to icons
  const platformIcons = platform.split(", ").map((p) => iconMap[p.trim()]);

  return (
    <HStack>
      {platformIcons.map((IconComponent, index) =>
        IconComponent ? (
          <Icon key={index} as={IconComponent} color="gray.500" />
        ) : null
      )}
    </HStack>
  );
};

export default PlatformIcon;
