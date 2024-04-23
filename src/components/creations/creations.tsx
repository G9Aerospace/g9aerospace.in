import { component$ } from "@builder.io/qwik";
import styles from "./creations.module.css";
import creationsData from "../../data/creations.json";

// Import images for each organization
import bbn from "../../media/bbn.png";
import eranodes from "../../media/eranodes.png";
import legacynodes from "../../media/legacynodes.png"
import g9aerospace from "../../media/g9aerospace.png";
import vypergroup from "../../media/vypergroup.png";
import kspcommunity from "../../media/kspcommunity.png"

export default component$(() => {
  // Function to get the image based on organization
  const getImage = (organisation) => {
    switch (organisation) {
      case "BBN":
        return bbn;
      case "EraNodes":
        return eranodes;
      case "LegacyNodes":
        return legacynodes;
      case "VyperGroup":
        return vypergroup;
      case "KSPCommunity":
        return kspcommunity;
      default:
        return g9aerospace;
    }
  };

  return (
    <div class={styles.container}>
      <ul class={styles.creationsList}>
        {creationsData.map((creation, index) => (
          <li key={index} class={styles.creationItem}>
            {/* Render image */}
            <img src={getImage(creation.organisation)} alt={creation.organisation} class={styles.creationOrganizationImage} />

            <p class={styles.creationName}>{creation.name}</p>
            {creation.organisation && (
              <p class={styles.creationOrganisation}>{creation.organisation}</p>
            )}
            {creation.website && (
              <a href={creation.website} target="_blank" rel="noopener noreferrer" class={styles.creationLink}>
                Visit Website
              </a>
            )}
            {creation.githubLink && (
              <a href={creation.githubLink} target="_blank" rel="noopener noreferrer" class={styles.creationLink}>
                GitHub Repository
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
});