<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
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
define( 'DB_NAME', 'lily' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '*}%FedDcs7<_v7/EO?nk5AXYW0lSy4zo2ltRd:~U*6tp}Sb/&V3E{rL<jn2S=[/>' );
define( 'SECURE_AUTH_KEY',  'e$Ve.p#ArW+k==bk &7Wf>VT6L8|9oEg.TFEN,}dl1,(OLCv)G|KiocA65^ ?{E,' );
define( 'LOGGED_IN_KEY',    '+MvJ=z}$Jziz^whwjgTaZjMgc0S1f4Qa.u0~A<AQUICj6tD q=3OGK0~0/-pE>5W' );
define( 'NONCE_KEY',        '={/3WG3~(#M2N_)rhQYx^r.4>JgmImj?YeXbNAF4b_v4TI1br.n|Q_73@Nz0o3!:' );
define( 'AUTH_SALT',        'S@X~rd95M#;CLVxx([OxQ:5uD:De4R@%Ad+?P1jYJ@sk1^;aP|w}&!_uTufz.s1_' );
define( 'SECURE_AUTH_SALT', '8b<T*^G:6ixr5h9Ar$N0/<{Y?D&a5J+a$|cyX$KvmE>jpEu7r~;fkfzf5 [+KFn8' );
define( 'LOGGED_IN_SALT',   'Czh& JZTW|K0Rf0M9TwoP:&Xh.ue25T@IXr33E_dlTxv,]G2>LPj_v~D_7U^i=1}' );
define( 'NONCE_SALT',       'kJ+&jb)LAc2j)6#A()%>#U`ufy17, ^qoCd$}Tob)kZ2-f[]uP0hogx3=Rv=x~xd' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
