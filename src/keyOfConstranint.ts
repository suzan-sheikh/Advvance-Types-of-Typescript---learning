//? keyof : type operator

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string
}
type MyVehicle = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle = 'bike';
