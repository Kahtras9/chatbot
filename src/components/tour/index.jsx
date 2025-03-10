import React, { useState } from "react";
import { packages } from "./packageData";
import Popup from "./Popup";
import { Container, PackageCard, PackageTitle, PackageDescription, SeeMoreButton } from "./index.sc";

const Tour = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <Container>
      {packages.map((pkg) => (
        <PackageCard key={pkg.id}>
          <PackageTitle>{pkg.title}</PackageTitle>
          <PackageDescription>{pkg.description}</PackageDescription>
          <SeeMoreButton onClick={() => setSelectedPackage(pkg)}>See More</SeeMoreButton>
        </PackageCard>
      ))}
      {selectedPackage && <Popup packageData={selectedPackage} onClose={() => setSelectedPackage(null)} />}
    </Container>
  );
};

export default Tour;
