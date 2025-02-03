import React from 'react';

interface LogoProps {
    color?: string;
    size?: number | string;
    className?: string;
}

const Logo = ({ color = '#0d1738', size = 'auto', className }: LogoProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 195 200"
            style={{
                width: 160,
                height: 165,
            }}
            className={className}
        >
            <path
                fill={color}
                d="M67.43,174.96V59.47h6.37v117.86c2.77,2.63,9.21,2.61,9.21,2.61V59.47h6.34v121.08c64.25,6.87,90.57-48.69,90.73-71.04l14.92,.24v-12.69H115.03v11.96l54.54-.24c-8.56,62.99-70.43,62.74-70.43,62.74l.24-111.08h77.04v-11.96H40.2v-8.79h109.07v-12.45H71.74v-7.32h27.39V0c-132.05,2.28-132.22,197.39-.26,200v-9.24C5.56,183.08,8.62,100.15,8.62,100.15h8.62c-.5,44.37,34.35,66.31,34.31,66.13V59.47h6.76v111.42c3.4,4.02,9.12,4.28,9.12,4.28v-.21"
            />
        </svg>
    );
};

export default Logo;