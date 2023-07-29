import { arrayWithNames, arrayWithPhoneNumbers } from "./data/arrays";
import { CombinedUser, UserWithPhoneAsArray } from "./utils/interfaces";

export const combineArrays = (
  arr1: UserWithPhoneAsArray[],
  arr2: { email: string; name: string }[]
): CombinedUser[] => {
  const resultMap = new Map<string, CombinedUser>();

  // Insert data from arrayWithPhoneNumbers into the map
  for (const item of arr1) {
    const phoneNumber = item.phoneNumbers[0]?.value ?? ""; // Get the phone number or set to an empty string
    resultMap.set(item.email, { ...item, name: "", phoneNumber });
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
        phoneNumber: "",
      });
    }
  }

  // Convert the map values back to an array
  const combinedArray: CombinedUser[] = Array.from(resultMap.values());

  return combinedArray;
};

export const combinedArray: CombinedUser[] = combineArrays(
  arrayWithPhoneNumbers,
  arrayWithNames
);
