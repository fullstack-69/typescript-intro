interface User {
  id: number;
  name: string;
}

// Extend
interface UserExtended extends User {
  isActive: boolean;
}
