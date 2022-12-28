import { sequelize } from "../core/db.js";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

interface StationModel
  extends Model<
    InferAttributes<StationModel>,
    InferCreationAttributes<StationModel>
  > {
  id: CreationOptional<number>;
  user_id?: string;
  name?: string;
  location?: string;
  image?: string;
  phone?: string;
  address?: string;
  work_time?: string;
  info?: string;
  is_active?: boolean;
  station_state?: string;
  fuel_list?: string[];
}
export const Station = sequelize.define<StationModel>("station", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  user_id: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  location: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  work_time: { type: DataTypes.STRING },
  info: { type: DataTypes.TEXT },
  station_state: { type: DataTypes.STRING },
  is_active: { type: DataTypes.BOOLEAN, defaultValue: false },
  fuel_list: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
});
