
function disasterManagementStyle(stateCode) {
  switch (stateCode) {
    case "01": // Andhra Pradesh
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "orange",
        weight: 1,
        resources: { medical: 500, food: 1000, shelter: 200 },
      };
    case "02": // Arunachal Pradesh
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "green",
        weight: 1,
        resources: { medical: 300, food: 800, shelter: 150 },
      };
    case "03": // Assam
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "blue",
        weight: 1,
        resources: { medical: 400, food: 900, shelter: 250 },
      };
    case "04": // Bihar
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "purple",
        weight: 1,
        resources: { medical: 600, food: 1200, shelter: 300 },
      };
    case "05": // Chhattisgarh
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "red",
        weight: 1,
        resources: { medical: 350, food: 700, shelter: 180 },
      };
    case "06": // Goa
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "yellow",
        weight: 1,
        resources: { medical: 200, food: 500, shelter: 100 },
      };
    case "07": // Gujarat
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "cyan",
        weight: 1,
        resources: { medical: 550, food: 1100, shelter: 250 },
      };
    case "08": // Haryana
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "magenta",
        weight: 1,
        resources: { medical: 450, food: 950, shelter: 220 },
      };
    case "09": // Himachal Pradesh
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "lime",
        weight: 1,
        resources: { medical: 250, food: 600, shelter: 130 },
      };
    case "10": // Jharkhand
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "salmon",
        weight: 1,
        resources: { medical: 300, food: 800, shelter: 200 },
      };
    case "11": // Karnataka
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "peachpuff",
        weight: 1,
        resources: { medical: 700, food: 1500, shelter: 350 },
      };
    case "12": // Kerala
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "violet",
        weight: 1,
        resources: { medical: 400, food: 900, shelter: 250 },
      };
    case "13": // Madhya Pradesh
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "tan",
        weight: 1,
        resources: { medical: 500, food: 1200, shelter: 280 },
      };
    case "14": // Maharashtra
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "khaki",
        weight: 1,
        resources: { medical: 800, food: 2000, shelter: 400 },
      };
    case "15": // Manipur
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "darkgreen",
        weight: 1,
        resources: { medical: 250, food: 600, shelter: 140 },
      };
    case "16": // Meghalaya
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "darkorange",
        weight: 1,
        resources: { medical: 200, food: 500, shelter: 120 },
      };
    case "17": // Mizoram
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "crimson",
        weight: 1,
        resources: { medical: 150, food: 400, shelter: 100 },
      };
    case "18": // Nagaland
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "darkblue",
        weight: 1,
        resources: { medical: 200, food: 500, shelter: 130 },
      };
    case "19": // Odisha
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "sienna",
        weight: 1,
        resources: { medical: 350, food: 800, shelter: 200 },
      };
    case "20": // Punjab
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "turquoise",
        weight: 1,
        resources: { medical: 450, food: 900, shelter: 220 },
      };
    case "21": // Rajasthan
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "wheat",
        weight: 1,
        resources: { medical: 600, food: 1200, shelter: 300 },
      };
    case "22": // Sikkim
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "forestgreen",
        weight: 1,
        resources: { medical: 200, food: 500, shelter: 150 },
      };
    case "23": // Tamil Nadu
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "lightcoral",
        weight: 1,
        resources: { medical: 700, food: 1500, shelter: 350 },
      };
    case "24": // Telangana
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "plum",
        weight: 1,
        resources: { medical: 600, food: 1300, shelter: 300 },
      };
    case "25": // Tripura
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "lightslategrey",
        weight: 1,
        resources: { medical: 200, food: 500, shelter: 150 },
      };
    case "26": // Uttar Pradesh
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "lightpink",
        weight: 1,
        resources: { medical: 800, food: 2000, shelter: 400 },
      };
    case "27": // Uttarakhand
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "lightgreen",
        weight: 1,
        resources: { medical: 300, food: 700, shelter: 180 },
      };
    case "28": // West Bengal
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "lightblue",
        weight: 1,
        resources: { medical: 600, food: 1400, shelter: 320 },
      };
    case "29": // Jammu and Kashmir
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "indigo",
        weight: 1,
        resources: { medical: 300, food: 800, shelter: 200 },
      };
    case "30": // Ladakh
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "lightgrey",
        weight: 1,
        resources: { medical: 150, food: 400, shelter: 100 },
      };
    case "31": // Delhi
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "orange",
        weight: 1,
        resources: { medical: 700, food: 1500, shelter: 300 },
      };
    default:
      return {
        color: "black",
        dashArray: "5, 5",
        fillColor: "grey",
        weight: 1,
        resources: { medical: 200, food: 500, shelter: 100 },
      };
