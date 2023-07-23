import { arrayWithNames, arrayWithPhoneNumbers } from "./data/arrays";
import { User } from "./utils/interfaces";

export const combineArrays = (
  arr1: User[],
  arr2: { email: string; name: string }[]
): User[] => {
  const resultMap = new Map<string, User>();

  // Insert data from arrayWithPhoneNumbers into the map
  for (const item of arr1) {
    resultMap.set(item.email, { ...item });
  }

  // Merge data from arrayWithNames into the map
  for (const item of arr2) {
    const existingItem = resultMap.get(item.email);
    if (existingItem) {
      existingItem.name = item.name;
    } else {
      resultMap.set(item.email, {
        email: item.email,
        name: item.name,
        phoneNumbers: [],
      });
    }
  }

  // Convert the map values back to an array
  return Array.from(resultMap.values());
};

export const combinedArray: User[] = combineArrays(
  arrayWithPhoneNumbers,
  arrayWithNames
);
