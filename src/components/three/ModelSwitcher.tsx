import { PresentationControls } from "@react-three/drei";
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import * as THREE from "three";

import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;
// ModelSwitcher component to switch between MacBook models based on scale and device type

const setMeshOpacity = (group: THREE.Group | null | undefined, opacity: number, animate = true) => {
  if (!group) return;

  group.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      materials.forEach((material) => {
        material.transparent = true;
        if (animate) {
          gsap.to(material, { opacity, duration: ANIMATION_DURATION });
        } else {
          material.opacity = opacity;
        }
      });
    }
  });
};

const fadeMeshes = (group: THREE.Group | null | undefined, opacity: number) => {
  setMeshOpacity(group, opacity, true);
};
// ModelSwitcher component to switch between MacBook models based on scale and device type

const moveGroup = (group: THREE.Group | null | undefined, x: number) => {
  if (!group) return;
  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};
const ModelSwitcher = ({ scale, isMobile }: { scale: number; isMobile: boolean }) => {
  // Refs for the two MacBook models
  const smallMacbookRef = useRef<THREE.Group>(null);
  const largeMacbookRef = useRef<THREE.Group>(null);

  // Determine which model to show based on scale
  // scale 0.06 (or 0.03 on mobile) = 14" model (small)
  // scale 0.08 (or 0.05 on mobile) = 16" model (large)
  const showSmallMacbook = scale <= 0.06;

  useGSAP(() => {
    if (showSmallMacbook) {
      // Show the 14" model (smallMacbookRef)
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);
    } else {
      // Show the 16" model (largeMacbookRef)
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);

      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
    }
  }, [scale, showSmallMacbook]);

  const controlsConfig = {
    enabled: true,
    snap: true,
    global: false,
    cursor: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI] as [number, number],
    azimuth: [-Math.PI / 4, Math.PI / 4] as [number, number],
    //these values control how quickly the model returns to its original position
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
        <MacbookModel14 scale={isMobile ? 0.03 : 0.06}/>
        </group>
    </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
