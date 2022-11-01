import {config} from './wdio.conf'
import {join} from 'path'

config.specs = [
    './appTest/specs/ios/**/*.ts'
]

config.capabilities = [
    {
        'appium:platformName': 'iOS',
        'appium:automationName':'XCUITest',
        'appium:deviceName' : 'iPhone SE (3rd generation)',
        'appium:platformVersion': '16.0',
        'appium:app': join(process.cwd(), 'apps/MyRNDemoApp.app'),
        'appium:bundleId':'com.saucelabs.mydemoapp.rn',
        'appium:noReset': true
    }
]

config.logLevel = 'info'

exports.config = config

