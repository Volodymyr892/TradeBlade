export const customStylesStandart = {
    control: (base) => ({
      ...base,
      backgroundColor: "#2E2F38",
      borderRadius: "8px",
      border: "none",
      padding: "6px",
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: "400",
      minHeight: "36px",
      maxWidth: "128px",
      boxShadow: "none",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#ffffff",
      fontWeight: "400",
    fontSize: "16px",
    lineHeight: "125%",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#ffffff",
      padding: "0",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#2E2F38",
      borderRadius: "8px",
      marginTop: "4px",
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "#3A3B45" : "#2E2F38",
      color: "#ffffff",
      cursor: "pointer",
    }),
  };

  export const customStylesVip = {
    control: (base) => ({
      ...base,
      backgroundColor: "#FFFFFF33",
      borderRadius: "8px",
      border: "none",
      padding: "6px",
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: "400",
      minHeight: "36px",
      maxWidth: "128px",
      boxShadow: "none",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#ffffff",
      fontWeight: "400",
    fontSize: "16px",
    lineHeight: "125%",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#ffffff",
      padding: "0",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#2E2F38",
      borderRadius: "8px",
      marginTop: "4px",
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "#3A3B45" : "#2E2F38",
      color: "#ffffff",
      cursor: "pointer",
    }),
  };