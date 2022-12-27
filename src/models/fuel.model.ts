import { sequelize } from "../core/db.js";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

interface FuelModel
  extends Model<
    InferAttributes<FuelModel>,
    InferCreationAttributes<FuelModel>
  > {
  id: CreationOptional<number>;
  user_id?: string;
  station_id?: string;
  fuel?: string;
  marka?: string;
  price?: string;
  measure?: string;
  fuel_state?: string;
}
export const Fuel = sequelize.define<FuelModel>("fuel", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  user_id: { type: DataTypes.STRING },
  station_id: { type: DataTypes.INTEGER },
  fuel: { type: DataTypes.STRING },
  marka: { type: DataTypes.STRING },
  price: { type: DataTypes.DECIMAL },
  measure: { type: DataTypes.STRING },
  fuel_state: { type: DataTypes.STRING },
});
