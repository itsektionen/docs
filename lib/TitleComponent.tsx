"use client";

import { usePathname } from "fumadocs-core/framework";
import { useOnChange } from "fumadocs-core/utils/use-on-change";
import { Fragment, useEffect, useState } from "react";
import { getLocationInfo, getMapping } from "./pathnameMapper";

function getLengthOfMatchingStart(a: string, b: string) {
  let minLength = Math.min(a.length, b.length);
  for (let i = 0; i < minLength; i++) {
    if (a[i] != b[i]) {
      return i;
    }
  }
  return minLength;
}

export default function TitleComponent() {
  const pathname = usePathname();
  const mapping = getMapping(pathname);

  const [targetDocTitle, setTargetDocTitle] = useState(
    getLocationInfo(mapping).title,
  );
  const [docTitle, setDocTitle] = useState(getLocationInfo(mapping).title);

  useOnChange(pathname, () => {
    const newMapping = getMapping(pathname);
    setTargetDocTitle(getLocationInfo(newMapping).title);
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches == true;
    if (prefersReducedMotion) {
      setDocTitle(getLocationInfo(newMapping).title);
    }
  });

  useEffect(() => {
    if (targetDocTitle == docTitle) {
      return;
    }

    let newDocName = docTitle;
    const sharedLength = getLengthOfMatchingStart(targetDocTitle, docTitle);
    const stepsWriting = targetDocTitle.length - sharedLength;
    const stepsDeleting = docTitle.length - sharedLength;
    const remainingSteps = stepsWriting + stepsDeleting * 0.5;
    if (
      newDocName == "" ||
      (targetDocTitle.startsWith(newDocName) &&
        newDocName.length < targetDocTitle.length)
    ) {
      newDocName = targetDocTitle.substring(0, newDocName.length + 1);
    } else {
      newDocName = newDocName.substring(0, newDocName.length - 1);
    }

    const timeout = setTimeout(
      () => {
        setDocTitle(newDocName);
      },
      Math.max(40 / remainingSteps, 4),
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [targetDocTitle, docTitle]);

  return <>{docTitle}</>;
}
