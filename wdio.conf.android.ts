import {config} from './wdio.conf'
import {join} from 'path'

config.specs = [
    './appTest/specs/android/**/*.ts'
]

config.capabilities = [
    {
        'appium:platformName': 'android',
        'appium:automationName':'UiAutomator2',
        'appium:deviceName' : 'Nexus_10_API_30',
        'appium:platformVersion': '11',
        'appium:app': join(process.cwd(), 'apps/Android-MyDemoAppRN.1.3.0.build-244.apk'),
        'appium:appPackage':'com.saucelabs.mydemoapp.rn',
        'appium:appWaitActivity':'com.saucelabs.mydemoapp.rn.MainActivity',
        'appium:noReset': true
    }
]

config.logLevel = 'debug'

exports.config = config

