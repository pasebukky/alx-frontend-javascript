interface MajorCredits {
    credits: number;
    _majorBrand: "MajorCredits";
  }
  
  interface MinorCredits {
    credits: number;
    _minorBrand: "MinorCredits";
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _majorBrand: "MajorCredits"
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _minorBrand: "MinorCredits"
    };
  }
  
  // Example usage
  const major1: MajorCredits = { credits: 3, _majorBrand: "MajorCredits" };
  const major2: MajorCredits = { credits: 4, _majorBrand: "MajorCredits" };
  
  const minor1: MinorCredits = { credits: 2, _minorBrand: "MinorCredits" };
  const minor2: MinorCredits = { credits: 1, _minorBrand: "MinorCredits" };
  
  const totalMajorCredits = sumMajorCredits(major1, major2);
  const totalMinorCredits = sumMinorCredits(minor1, minor2);
  
  console.log(`Total Major Credits: ${totalMajorCredits.credits}`);
  console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);
  