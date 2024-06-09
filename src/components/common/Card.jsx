import React from 'react';

const Card = ({title, icon, value, month}) => {

    return (
        <div className="">
            <div className="flex flex-items justify-between mb-12">
                <div className="font-semibold text-sm text-contenttext dark:text-dark-contenttext">{title}</div>
                <div className="text-title dark:text-dark-title">{icon}</div>
            </div>
            <div className="flex flex-items justify-between">
                <div className="font-smibold text-sm text-contenttext dark:text-dark-contenttext">{value}</div>
                <div className="font-smibold text-sm text-contenttext dark:text-dark-contenttext">{month}</div>
            </div>
        </div>
    );
};

export default Card;
