import { Model, DataTypes } from 'sequelize';

'use strict';

export default (sequelize) => {
  class Tasks extends Model {
    static associate(models) {
      // define associations here if needed
    }
  }

  Tasks.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false, // Ensuring the title is required
      },
      description: {
        type: DataTypes.STRING,
      },
      completed: {
        type: DataTypes.BOOLEAN, // Using DataTypes.BOOLEAN
        defaultValue: false, // Optional: Set default value as false
      },
    },
    {
      sequelize,
      modelName: 'Tasks',
    }
  );
  
  return Tasks;
};
