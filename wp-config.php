<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'lilyweb-agency-2021' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'YOUR_STRONG_SECRET' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Z+Do+jaYzRLft2H1:lpSZU~x^9a&V`?%/0eiZ82mhE/!D(xu,6fL }D^45YSpQvj' );
define( 'SECURE_AUTH_KEY',  'vYmXUh0^h3|PUp@_&.1pCzgC=YJFuMB./n&I$krZqcs/$OEQN!^=`5z%*Nu`Y%G%' );
define( 'LOGGED_IN_KEY',    'rGbZKH}R(4E9sPYZk&?^DTk[6>pW~BR^3WtoP|S@lPHZ/^jLW2SWGaCz$?~Nns<<' );
define( 'NONCE_KEY',        '/m5>8thk@(B,Gq+{x&o5+#97AixSyjKCkFhHC!%xm`^9YLU0<l&- lwDWm<2Y4({' );
define( 'AUTH_SALT',        '7`c)lr6 wFt.;_ake9I`X8 c=IX4@#)D?p&e>D-oX^5l2&lKae9pzCyg(C^Zd/QN' );
define( 'SECURE_AUTH_SALT', '03D5N63U+.-:s|LOJK.0bPd7,SEd-7{71h5)YO O-QR6%qdH~# s?-&#rm0AW!kU' );
define( 'LOGGED_IN_SALT',   'WA}_=#j;|WVo#([Fq2=j4AeF8)}2?iA.) +Vkk k$!molkV]=jVVE|jT^#?iCKsM' );
define( 'NONCE_SALT',       '~N^5,fqi&7*7H[7=eD>|n-N_),rT@CG.mtd 46/bN-irpsS#HKc`N,QBhfz{N}xO' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
