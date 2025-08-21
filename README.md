## 📜 LineageOS Source Changes (Last 30 Days)

<details>
<summary><b>android</b></summary>

- [e3425b2](https://github.com/LineageOS/android/commit/e3425b2) lineage: Sunset LiveDisplay HIDL
  
  Author: Bruno Martins  
  Date: Mon Aug 18 19:21:26 2025 +0000

- [c624338](https://github.com/LineageOS/android/commit/c624338) manifest: Drop superproject tag
  
  Author: Alexander Koskovich  
  Date: Sun Aug 17 22:12:20 2025 +0000

- [56057a7](https://github.com/LineageOS/android/commit/56057a7) manifest: Unfork cronet
  
  Author: Nolen Johnson  
  Date: Fri Aug 15 20:01:41 2025 +0000

- [050d4d5](https://github.com/LineageOS/android/commit/050d4d5) manifest: Unfork more repos
  
  Author: Michael Bestas  
  Date: Wed Jul 23 19:31:26 2025 +0300


</details>

<details>
<summary><b>build/make</b></summary>

- [7631c3c](https://github.com/LineageOS/android_build/commit/7631c3c) Revert &quot;Drop legacy vboot support.&quot;
  
  Author: Nolen Johnson  
  Date: Mon Aug 11 14:25:30 2025 -0400

- [8401cef](https://github.com/LineageOS/android_build/commit/8401cef) releasetools: Unconditionally store recovery.img in non-A/B OTA
  
  Author: LuK1337  
  Date: Mon Aug 11 14:23:48 2025 -0400

- [5316e57](https://github.com/LineageOS/android_build/commit/5316e57) releasetools: Make recovery patch use bsdiff exclusively
  
  Author: Gérard Parat  
  Date: Mon Aug 11 14:23:47 2025 -0400

- [745a0b1](https://github.com/LineageOS/android_build/commit/745a0b1) build: Enable super image build rules depending on single super block device
  
  Author: Yumi Yukimura  
  Date: Mon Aug 11 14:21:32 2025 -0400

- [60a3fda](https://github.com/LineageOS/android_build/commit/60a3fda) releasetools: Pass non-sparse super_empty.img to update_dynamic_partitions()
  
  Author: Yumi Yukimura  
  Date: Mon Aug 11 14:21:32 2025 -0400

- [670cbe1](https://github.com/LineageOS/android_build/commit/670cbe1) releasetools: build_super_image: Do not set readonly attr
  
  Author: Yumi Yukimura  
  Date: Mon Aug 11 14:21:32 2025 -0400

- [3469556](https://github.com/LineageOS/android_build/commit/3469556) Fix unified a/b zip generation failure
  
  Author: Aaron Kling  
  Date: Sun Jul 27 23:22:14 2025 -0400

- [d27fe35](https://github.com/LineageOS/android_build/commit/d27fe35) releasetools: Fallback to calculated fp if partition fp is missing
  
  Author: Aaron Kling  
  Date: Sun Jul 27 23:22:05 2025 -0400

- [fcc3738](https://github.com/LineageOS/android_build/commit/fcc3738) build: Separate commands in recovery foreach loops
  
  Author: Matt Mower  
  Date: Sat Jul 26 15:22:42 2025 +0100

- [6d27abb](https://github.com/LineageOS/android_build/commit/6d27abb) build: recovery: Support adding device-specific items
  
  Author: Tom Marshall  
  Date: Sat Jul 26 15:09:49 2025 +0100


</details>

<details>
<summary><b>device/lineage/sepolicy</b></summary>

- [2337132](https://github.com/LineageOS/android_device_lineage_sepolicy/commit/2337132) lineage: Remove LiveDisplay HIDL rules
  
  Author: Bruno Martins  
  Date: Sun Aug 17 00:00:52 2025 +0100

- [f17befc](https://github.com/LineageOS/android_device_lineage_sepolicy/commit/f17befc) common: Add AIDL LiveDisplay sysfs HAL
  
  Author: Yumi Yukimura  
  Date: Sat Aug 16 23:03:35 2025 +0100

- [2438a2a](https://github.com/LineageOS/android_device_lineage_sepolicy/commit/2438a2a) qcom: Label AIDL LiveDisplay SDM HAL
  
  Author: LuK1337  
  Date: Sat Aug 16 23:03:03 2025 +0100

- [80894be](https://github.com/LineageOS/android_device_lineage_sepolicy/commit/80894be) common: Add LiveDisplay AIDL interface
  
  Author: LuK1337  
  Date: Sat Aug 16 23:03:03 2025 +0100

- [a9abdf4](https://github.com/LineageOS/android_device_lineage_sepolicy/commit/a9abdf4) common: Remove fastcharge HIDL rules
  
  Author: Michael Bestas  
  Date: Sat Aug 16 23:03:03 2025 +0100

- [ecde594](https://github.com/LineageOS/android_device_lineage_sepolicy/commit/ecde594) common: Label vendor.lineage.health.IFastCharge/default
  
  Author: LuK1337  
  Date: Sat Aug 16 23:03:03 2025 +0100

- [5844045](https://github.com/LineageOS/android_device_lineage_sepolicy/commit/5844045) qcom: Remove cryptfshw remnants
  
  Author: Bruno Martins  
  Date: Sat Aug 16 23:03:01 2025 +0100


</details>

<details>
<summary><b>device/qcom/sepolicy_vndr/legacy-um</b></summary>

- [fc367b4](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/fc367b4) sepolicy: holi: Label pmr735a power supply nodes
  
  Author: LuK1337  
  Date: Mon Aug 4 15:56:22 2025 +0200


</details>

<details>
<summary><b>device/qcom/sepolicy_vndr/sm8650</b></summary>

- [d918ef2](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/d918ef2) sepolicy_vndr: Allow USB HAL to read display brightness
  
  Author: Wesley Cheng  
  Date: Sat Jul 26 13:29:32 2025 +0300

- [3af629c](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/3af629c) sepolicy: Remove sysfs_udc label
  
  Author: Michael Bestas  
  Date: Sat Jul 26 13:29:32 2025 +0300

- [ce481bc](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/ce481bc) sepolicy_vndr: Allow USB HAL to access udc sysfs nodes
  
  Author: Akash Kumar  
  Date: Sat Jul 26 13:29:32 2025 +0300

- [db9d8b6](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/db9d8b6) sepolicy: Remove mem_sleep sysfs label
  
  Author: ViShal69x  
  Date: Sat Jul 26 13:29:32 2025 +0300

- [791bef2](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/791bef2) generic: Allow init write to discard_max_bytes
  
  Author: dianlujitao  
  Date: Sat Jul 26 13:29:32 2025 +0300

- [bd7be83](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/bd7be83) generic: Label discard_max_bytes sysfs
  
  Author: Michael Bestas  
  Date: Sat Jul 26 13:29:32 2025 +0300

- [b379507](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/b379507) sepolicy_vndr: Move qti-media file contexts to genfs
  
  Author: Priyanka Gujjula  
  Date: Thu Jul 24 14:42:59 2025 +0300

- [824ca74](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/824ca74) seapp_context: Fix build error.
  
  Author: Siddeswar Aluganti  
  Date: Thu Jul 24 14:42:54 2025 +0300

- [bf7667f](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/bf7667f) qva: Extend extcon rules
  
  Author: Bruno Martins  
  Date: Thu Jul 24 14:42:25 2025 +0300


</details>

<details>
<summary><b>frameworks/av</b></summary>

- [5cad168](https://github.com/LineageOS/android_frameworks_av/commit/5cad168) libstagefright: Conditionally disable `thumbnail_block_model`
  
  Author: ahnet-69  
  Date: Wed Jul 30 16:57:26 2025 +0000


</details>

<details>
<summary><b>frameworks/native</b></summary>

- [3ae992f8](https://github.com/LineageOS/android_frameworks_native/commit/3ae992f8) libgui: reset buffer count to max slots instead of returning BAD_VALUE.
  
  Author: Rajat Yadav  
  Date: Wed Jul 30 01:30:55 2025 +0300


</details>

<details>
<summary><b>hardware/interfaces</b></summary>

- [a29bff7](https://github.com/LineageOS/android_hardware_interfaces/commit/a29bff7) compatibility_matrices: Bring HIDL Radio entries to FCM 7
  
  Author: Yumi Yukimura  
  Date: Mon Aug 11 19:31:45 2025 -0400

- [481d0d8](https://github.com/LineageOS/android_hardware_interfaces/commit/481d0d8) cec: Don&#x27;t spam &quot;Machine is not on the network&quot;
  
  Author: Nolen Johnson  
  Date: Sun Aug 10 22:19:20 2025 -0400

- [9d787eb](https://github.com/LineageOS/android_hardware_interfaces/commit/9d787eb) bluetooth: do not fatally error on unknown packet types
  
  Author: Billy Laws  
  Date: Sun Aug 10 22:19:20 2025 -0400

- [d3e0390](https://github.com/LineageOS/android_hardware_interfaces/commit/d3e0390) audio: Verify that hal implements get_audio_port before calling
  
  Author: Aaron Kling  
  Date: Sun Aug 10 22:19:20 2025 -0400

- [2ac433b](https://github.com/LineageOS/android_hardware_interfaces/commit/2ac433b) compatibility_matrices: Add kernel_config_s_4.14
  
  Author: Michael Bestas  
  Date: Thu Jul 31 00:46:02 2025 +0300

- [ed83fec](https://github.com/LineageOS/android_hardware_interfaces/commit/ed83fec) interfaces: fix disable_configstore
  
  Author: Dmitrii  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [308d97f](https://github.com/LineageOS/android_hardware_interfaces/commit/308d97f) radiocompat: Implement iccCloseLogicalChannelWithSessionInfo()
  
  Author: LuK1337  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [add589f](https://github.com/LineageOS/android_hardware_interfaces/commit/add589f) compatibility_matrices: Allow radio 1.5 on target-level 6
  
  Author: Yumi Yukimura  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [f1b0dfc](https://github.com/LineageOS/android_hardware_interfaces/commit/f1b0dfc) Camera: Remap camera IDs by property if it is defined
  
  Author: Ivan Vecera  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [e8b756c](https://github.com/LineageOS/android_hardware_interfaces/commit/e8b756c) Camera: Maintain set of non-external cameras
  
  Author: Ivan Vecera  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [3f55060](https://github.com/LineageOS/android_hardware_interfaces/commit/3f55060) fpc: Fix potential nullptr derefs
  
  Author: LuK1337  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [53af31a](https://github.com/LineageOS/android_hardware_interfaces/commit/53af31a) Revert &quot;fpc: keep fpc in system-background&quot;
  
  Author: Jake Weinstein  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [ace5734](https://github.com/LineageOS/android_hardware_interfaces/commit/ace5734) btaudio: aidl: add 16 bit sample rate for aptX offloading
  
  Author: klozz  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [a3647b0](https://github.com/LineageOS/android_hardware_interfaces/commit/a3647b0) btaudio: aidl: Support offloading all LDAC qualities
  
  Author: Adithya R  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [94b0639](https://github.com/LineageOS/android_hardware_interfaces/commit/94b0639) camera: Make overrideFormat from reserved fields opt-in
  
  Author: Rohit Sekhar  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [3965516](https://github.com/LineageOS/android_hardware_interfaces/commit/3965516) frameworks: Update HIDL overrideFormat from HAL
  
  Author: Abhijit Trivedi  
  Date: Thu Jul 31 00:46:01 2025 +0300


</details>

<details>
<summary><b>hardware/lineage/compat</b></summary>

- [b799233](https://github.com/LineageOS/android_hardware_lineage_compat/commit/b799233) radio/config: Edit backend interface name
  
  Author: Yumi Yukimura  
  Date: Thu Aug 14 17:52:51 2025 +0000

- [04ed5c7](https://github.com/LineageOS/android_hardware_lineage_compat/commit/04ed5c7) radio/config: Add Android.bp
  
  Author: Yumi Yukimura  
  Date: Thu Aug 14 17:51:00 2025 +0000

- [65e9974](https://github.com/LineageOS/android_hardware_lineage_compat/commit/65e9974) radio/config: `hidl-gen -L c++ android.hardware.radio.config@1.{0..2}`
  
  Author: Yumi Yukimura  
  Date: Thu Aug 14 17:50:50 2025 +0000

- [f33a55b](https://github.com/LineageOS/android_hardware_lineage_compat/commit/f33a55b) radio/config: Remove the old implementation
  
  Author: Yumi Yukimura  
  Date: Thu Aug 14 17:50:34 2025 +0000

- [6fc7494](https://github.com/LineageOS/android_hardware_lineage_compat/commit/6fc7494) compat: Provide libui-v34
  
  Author: Frost  
  Date: Wed Jul 30 17:04:35 2025 +0300


</details>

<details>
<summary><b>hardware/lineage/interfaces</b></summary>

- [8f9bf70](https://github.com/LineageOS/android_hardware_lineage_interfaces/commit/8f9bf70) livedisplay: Sunset HIDL
  
  Author: Bruno Martins  
  Date: Mon Aug 18 19:21:25 2025 +0000

- [24128f2](https://github.com/LineageOS/android_hardware_lineage_interfaces/commit/24128f2) fastcharge: Sunset HIDL
  
  Author: Michael Bestas  
  Date: Mon Aug 18 19:21:25 2025 +0000

- [ffee52d](https://github.com/LineageOS/android_hardware_lineage_interfaces/commit/ffee52d) livedisplay: sdm: Initial AIDL port
  
  Author: LuK1337  
  Date: Mon Aug 18 19:21:25 2025 +0000

- [7c08240](https://github.com/LineageOS/android_hardware_lineage_interfaces/commit/7c08240) livedisplay: Add AIDL interface
  
  Author: LuK1337  
  Date: Mon Aug 18 19:21:25 2025 +0000

- [92b86da](https://github.com/LineageOS/android_hardware_lineage_interfaces/commit/92b86da) health: Clean up ChargingControl includes
  
  Author: Bruno Martins  
  Date: Mon Aug 18 19:21:25 2025 +0000

- [b1cb282](https://github.com/LineageOS/android_hardware_lineage_interfaces/commit/b1cb282) health: Explicitly declare AIDL version in VINTF
  
  Author: Bruno Martins  
  Date: Mon Aug 18 19:21:25 2025 +0000

- [06f759c](https://github.com/LineageOS/android_hardware_lineage_interfaces/commit/06f759c) health: Implement IFastCharge interface
  
  Author: LuK1337  
  Date: Mon Aug 18 19:21:25 2025 +0000

- [08503d5](https://github.com/LineageOS/android_hardware_lineage_interfaces/commit/08503d5) Remove old Broadcom NFC impl
  
  Author: Bruno Martins  
  Date: Sun Aug 17 17:44:24 2025 +0000


</details>

<details>
<summary><b>hardware/qcom-caf/common</b></summary>

- [8e91e46](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/8e91e46) rfs: Add modem_firmware to RFS install targets
  
  Author: kmiit  
  Date: Sun Aug 10 08:43:34 2025 +0000


</details>

<details>
<summary><b>lineage-sdk</b></summary>

- [3831b61](https://github.com/LineageOS/android_lineage-sdk/commit/3831b61) sdk: Remove LiveDisplay HIDL support
  
  Author: Bruno Martins  
  Date: Sat Aug 16 20:42:12 2025 +0200

- [ff48520](https://github.com/LineageOS/android_lineage-sdk/commit/ff48520) Wire up AIDL LiveDisplay HAL
  
  Author: LuK1337  
  Date: Sat Aug 16 20:37:46 2025 +0200

- [e3790a3](https://github.com/LineageOS/android_lineage-sdk/commit/e3790a3) sdk: Add lineagehealth IFastCharge interface support
  
  Author: LuK1337  
  Date: Sat Aug 16 20:37:44 2025 +0200

- [16a2a81](https://github.com/LineageOS/android_lineage-sdk/commit/16a2a81) LineageHardwareManager: Restore FEATURE_SUNLIGHT_ENHANCEMENT case
  
  Author: Bruno Martins  
  Date: Sat Aug 16 15:09:44 2025 +0100

- [c4ce388](https://github.com/LineageOS/android_lineage-sdk/commit/c4ce388) health: Fix limit notification
  
  Author: Luofan Chen  
  Date: Wed Jul 30 01:44:48 2025 +0300

- [cea2b3c](https://github.com/LineageOS/android_lineage-sdk/commit/cea2b3c) health: Implement new charging control battery listener
  
  Author: Luofan Chen  
  Date: Wed Jul 30 01:44:46 2025 +0300


</details>

<details>
<summary><b>packages/apps/Aperture</b></summary>

- [82d6068](https://github.com/LineageOS/android_packages_apps_Aperture/commit/82d6068) Aperture: Update CameraX to 1.5.0-rc01
  
  Author: LuK1337  
  Date: Wed Aug 13 20:29:33 2025 +0200

- [f1d7cb0](https://github.com/LineageOS/android_packages_apps_Aperture/commit/f1d7cb0) Aperture: Update CameraX to 1.5.0-beta02
  
  Author: LuK1337  
  Date: Wed Aug 13 19:38:01 2025 +0200

- [7f948a8](https://github.com/LineageOS/android_packages_apps_Aperture/commit/7f948a8) Automatic translation import
  
  Author: LineageOS Infra  
  Date: Fri Aug 1 21:13:43 2025 +0000


</details>

<details>
<summary><b>packages/apps/DocumentsUI</b></summary>

- [deb341e](https://github.com/LineageOS/android_packages_apps_DocumentsUI/commit/deb341e) DocumentsUI: add icons for shortcuts
  
  Author: Timi Rautamäki  
  Date: Wed Jul 30 01:27:22 2025 +0300

- [12dabaa](https://github.com/LineageOS/android_packages_apps_DocumentsUI/commit/12dabaa) DocumentsUI: add feature for adding shortcuts to launcher
  
  Author: Timi Rautamäki  
  Date: Wed Jul 30 01:27:22 2025 +0300

- [e4f8af6](https://github.com/LineageOS/android_packages_apps_DocumentsUI/commit/e4f8af6) DocumentsUI: Bring in the new icon
  
  Author: Asher Simonds  
  Date: Wed Jul 30 01:27:17 2025 +0300


</details>

<details>
<summary><b>packages/apps/Etar</b></summary>

- [a776cef](https://github.com/LineageOS/android_packages_apps_Etar/commit/a776cef) Etar: ./gradlew generateBp
  
  Author: LuK1337  
  Date: Fri Aug 1 10:42:49 2025 +0200

- [1d22fbf](https://github.com/LineageOS/android_packages_apps_Etar/commit/1d22fbf) Merge tag &#x27;v1.0.51&#x27; of https://github.com/Etar-Group/Etar-Calendar into lineage-23.0
  
  Author: LuK1337  
  Date: Fri Aug 1 10:39:45 2025 +0200

- [4ad343e](https://github.com/LineageOS/android_packages_apps_Etar/commit/4ad343e) New version 1.0.51
  
  Author: Gitsaibot  
  Date: Fri Aug 1 09:20:46 2025 +0200

- [5b1382a](https://github.com/LineageOS/android_packages_apps_Etar/commit/5b1382a) Bump gradle version
  
  Author: Jochen Sprickerhof  
  Date: Fri Aug 1 08:57:35 2025 +0200

- [cbda6f1](https://github.com/LineageOS/android_packages_apps_Etar/commit/cbda6f1) Update time zone database to 2025b
  
  Author: Jochen Sprickerhof  
  Date: Fri Aug 1 08:46:30 2025 +0200

- [f67a527](https://github.com/LineageOS/android_packages_apps_Etar/commit/f67a527) Fix Event date picker for end date always preselects start
  
  Author: Gitsaibot  
  Date: Fri Aug 1 08:20:47 2025 +0200

- [ce5e43d](https://github.com/LineageOS/android_packages_apps_Etar/commit/ce5e43d) Bump org.jetbrains.gradle.plugin.idea-ext from 1.1.10 to 1.2
  
  Author: dependabot[bot]  
  Date: Fri Aug 1 08:06:03 2025 +0200

- [529b1b7](https://github.com/LineageOS/android_packages_apps_Etar/commit/529b1b7) Bump androidx.lifecycle:lifecycle-livedata-ktx from 2.9.1 to 2.9.2
  
  Author: dependabot[bot]  
  Date: Fri Aug 1 08:04:31 2025 +0200

- [5ac014f](https://github.com/LineageOS/android_packages_apps_Etar/commit/5ac014f) Bump agp from 8.11.0 to 8.11.1
  
  Author: dependabot[bot]  
  Date: Fri Aug 1 08:04:08 2025 +0200

- [72d13f7](https://github.com/LineageOS/android_packages_apps_Etar/commit/72d13f7) Translated using Weblate (Korean)
  
  Author: 안세훈  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [c3fb32a](https://github.com/LineageOS/android_packages_apps_Etar/commit/c3fb32a) Translated using Weblate (Ukrainian)
  
  Author: Максим Горпиніч  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [85b6063](https://github.com/LineageOS/android_packages_apps_Etar/commit/85b6063) Translated using Weblate (Latvian)
  
  Author: Edgars Andersons  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [ba766fb](https://github.com/LineageOS/android_packages_apps_Etar/commit/ba766fb) Translated using Weblate (French)
  
  Author: Antonin Del Fabbro  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [af6186b](https://github.com/LineageOS/android_packages_apps_Etar/commit/af6186b) Translated using Weblate (French)
  
  Author: Antonin Del Fabbro  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [0198526](https://github.com/LineageOS/android_packages_apps_Etar/commit/0198526) Translated using Weblate (Dutch)
  
  Author: Stephan Paternotte  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [813508a](https://github.com/LineageOS/android_packages_apps_Etar/commit/813508a) Translated using Weblate (Japanese)
  
  Author: Kazushi Hayama  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [0320df9](https://github.com/LineageOS/android_packages_apps_Etar/commit/0320df9) Translated using Weblate (German)
  
  Author: skdubg  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [dea7730](https://github.com/LineageOS/android_packages_apps_Etar/commit/dea7730) Translated using Weblate (Czech)
  
  Author: Fjuro  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [6f2ca62](https://github.com/LineageOS/android_packages_apps_Etar/commit/6f2ca62) Replace Activity with Context so that the function isSystemInDarkTheme() can be called with any context.
  
  Author: Gitsaibot  
  Date: Thu Jul 31 19:47:19 2025 +0200

- [3739be8](https://github.com/LineageOS/android_packages_apps_Etar/commit/3739be8) Improve readability of &quot;guest badge&quot; and solve lint warnings
  
  Author: Gitsaibot  
  Date: Thu Jul 31 19:47:19 2025 +0200

- [d894020](https://github.com/LineageOS/android_packages_apps_Etar/commit/d894020) Replace deprecated onBackPressed() with getOnBackPressedDispatcher()
  
  Author: Gitsaibot  
  Date: Thu Jul 31 19:47:19 2025 +0200

- [7878e3c](https://github.com/LineageOS/android_packages_apps_Etar/commit/7878e3c) Improve guest selection style so that the colors match the different themes. Also added support for vectorDrawables.
  
  Author: Gitsaibot  
  Date: Mon Jul 28 14:11:10 2025 +0200

- [e30b6fe](https://github.com/LineageOS/android_packages_apps_Etar/commit/e30b6fe) Replace baseline vector icon with the corresponding outline version.
  
  Author: Gitsaibot  
  Date: Sun Jul 27 14:06:09 2025 +0200

- [7328e28](https://github.com/LineageOS/android_packages_apps_Etar/commit/7328e28) Revert &quot;Enable automatic per-app language support (Closes: #1497)&quot;
  
  Author: LuK1337  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [be205f6](https://github.com/LineageOS/android_packages_apps_Etar/commit/be205f6) Etar: Hardcode Build.VERSION_CODES.VANILLA_ICE_CREAM to 35
  
  Author: LuK1337  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [d529679](https://github.com/LineageOS/android_packages_apps_Etar/commit/d529679) Etar: Override androidx.startup.InitializationProvider authority name
  
  Author: Michael Bestas  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [d25bdf4](https://github.com/LineageOS/android_packages_apps_Etar/commit/d25bdf4) Etar: Switch back to AOSP application name
  
  Author: Michael Bestas  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [f20d1fb](https://github.com/LineageOS/android_packages_apps_Etar/commit/f20d1fb) Etar: Dynamic icon
  
  Author: Asher Simonds  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [2fef515](https://github.com/LineageOS/android_packages_apps_Etar/commit/2fef515) Etar: Bring in the new icon
  
  Author: Asher Simonds  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [fecffe4](https://github.com/LineageOS/android_packages_apps_Etar/commit/fecffe4) Etar: Add GitHub actions build workflow
  
  Author: LuK1337  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [0a0b7b1](https://github.com/LineageOS/android_packages_apps_Etar/commit/0a0b7b1) Etar: Switch to non-ktx androidx.preference:preference
  
  Author: LuK1337  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [725cc98](https://github.com/LineageOS/android_packages_apps_Etar/commit/725cc98) Etar: Setup AOSP build
  
  Author: LuK1337  
  Date: Fri Jul 25 23:52:55 2025 +0200

- [7c3911c](https://github.com/LineageOS/android_packages_apps_Etar/commit/7c3911c) Drop checkPermission
  
  Author: Jochen Sprickerhof  
  Date: Fri Jul 25 20:55:34 2025 +0200

- [c02baf3](https://github.com/LineageOS/android_packages_apps_Etar/commit/c02baf3) Replace PI_FLAG_IMMUTABLE by it&#x27;s definition
  
  Author: Jochen Sprickerhof  
  Date: Fri Jul 25 20:55:34 2025 +0200

- [d6cb2f8](https://github.com/LineageOS/android_packages_apps_Etar/commit/d6cb2f8) Remove more unneeded functions
  
  Author: Gitsaibot  
  Date: Fri Jul 25 20:32:28 2025 +0200

- [1cfdee9](https://github.com/LineageOS/android_packages_apps_Etar/commit/1cfdee9) Remove unneeded functions
  
  Author: Gitsaibot  
  Date: Fri Jul 25 20:32:28 2025 +0200

- [4ad602b](https://github.com/LineageOS/android_packages_apps_Etar/commit/4ad602b) Remove unnecessary SDK checks
  
  Author: Gitsaibot  
  Date: Fri Jul 25 20:32:28 2025 +0200

- [bb94136](https://github.com/LineageOS/android_packages_apps_Etar/commit/bb94136) Remove PrimaryColor Pref
  
  Author: Gitsaibot  
  Date: Fri Jul 25 20:32:28 2025 +0200

- [a4a8036](https://github.com/LineageOS/android_packages_apps_Etar/commit/a4a8036) Fix &quot;jvmTarget is deprecated&quot;
  
  Author: Gitsaibot  
  Date: Fri Jul 25 20:32:28 2025 +0200

- [e6b4e1e](https://github.com/LineageOS/android_packages_apps_Etar/commit/e6b4e1e) Remove unused import directive
  
  Author: Gitsaibot  
  Date: Fri Jul 25 20:32:28 2025 +0200

- [b428755](https://github.com/LineageOS/android_packages_apps_Etar/commit/b428755) New version 1.0.50
  
  Author: Gitsaibot  
  Date: Wed Jul 23 03:20:21 2025 +0200

- [1777ff2](https://github.com/LineageOS/android_packages_apps_Etar/commit/1777ff2) Translated using Weblate (German)
  
  Author: nautilusx  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [56279f1](https://github.com/LineageOS/android_packages_apps_Etar/commit/56279f1) Translated using Weblate (Slovak)
  
  Author: Milan Šalka  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [e6d7e2a](https://github.com/LineageOS/android_packages_apps_Etar/commit/e6d7e2a) Translated using Weblate (Swedish)
  
  Author: Kristoffer Grundström  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [5eddc53](https://github.com/LineageOS/android_packages_apps_Etar/commit/5eddc53) Translated using Weblate (Swedish)
  
  Author: Kristoffer Grundström  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [4b6373d](https://github.com/LineageOS/android_packages_apps_Etar/commit/4b6373d) Translated using Weblate (Dutch)
  
  Author: Stephan Paternotte  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [e0cff50](https://github.com/LineageOS/android_packages_apps_Etar/commit/e0cff50) Translated using Weblate (Dutch)
  
  Author: Stephan Paternotte  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [76dacec](https://github.com/LineageOS/android_packages_apps_Etar/commit/76dacec) Translated using Weblate (Latvian)
  
  Author: Edgars Andersons  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [d257640](https://github.com/LineageOS/android_packages_apps_Etar/commit/d257640) Translated using Weblate (Italian)
  
  Author: Random  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [8a76d27](https://github.com/LineageOS/android_packages_apps_Etar/commit/8a76d27) Translated using Weblate (Hebrew)
  
  Author: Yaron Shahrabani  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [113691f](https://github.com/LineageOS/android_packages_apps_Etar/commit/113691f) Translated using Weblate (Czech)
  
  Author: Fjuro  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [a5b17c0](https://github.com/LineageOS/android_packages_apps_Etar/commit/a5b17c0) Translated using Weblate (German)
  
  Author: nautilusx  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [26b2e92](https://github.com/LineageOS/android_packages_apps_Etar/commit/26b2e92) Translated using Weblate (Korean)
  
  Author: 안세훈  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [bff4a83](https://github.com/LineageOS/android_packages_apps_Etar/commit/bff4a83) fix datePicker returns incorrect date
  
  Author: Gitsaibot  
  Date: Wed Jul 23 03:04:59 2025 +0200


</details>

<details>
<summary><b>packages/apps/Launcher3</b></summary>

- [9748f62](https://github.com/LineageOS/android_packages_apps_Launcher3/commit/9748f62) Launcher3: Add permission for contextual search
  
  Author: Pranav Vashi  
  Date: Tue Aug 12 20:58:47 2025 +0200

- [55d16d8](https://github.com/LineageOS/android_packages_apps_Launcher3/commit/55d16d8) Launcher3: Make taskbar start aligned in all grid sizes
  
  Author: Michael Bestas  
  Date: Tue Jul 29 14:37:17 2025 +0000


</details>

<details>
<summary><b>packages/apps/SettingsIntelligence</b></summary>

- [cc1a49f](https://github.com/LineageOS/android_packages_apps_SettingsIntelligence/commit/cc1a49f) SettingsIntelligence: Search: Skip showing a few packages
  
  Author: Michael W  
  Date: Thu Jul 31 01:14:56 2025 +0300

- [47fa3d3](https://github.com/LineageOS/android_packages_apps_SettingsIntelligence/commit/47fa3d3) SettingsIntelligence: Regen database on build version change
  
  Author: Luca Stefani  
  Date: Thu Jul 31 01:14:56 2025 +0300

- [8e09c77](https://github.com/LineageOS/android_packages_apps_SettingsIntelligence/commit/8e09c77) SettingsIntelligence: Bring in the new icon
  
  Author: Asher Simonds  
  Date: Thu Jul 31 01:14:52 2025 +0300


</details>

<details>
<summary><b>packages/apps/ThemePicker</b></summary>

- [a4c51d0](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/a4c51d0) ThemePicker: default to TONAL_SPOT for invalid Styles
  
  Author: Cosmin Tanislav  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [2a30e8d](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/2a30e8d) ThemePicker: Fix hardcoded launcher package name
  
  Author: basamaryan  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [78101bd](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/78101bd) ThemePicker: Allow text scroll in options title
  
  Author: Ido Ben-Hur  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [80a03b3](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/80a03b3) ThemePicker: Use the new material switch to match with settings
  
  Author: Ido Ben-Hur  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [effcdd3](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/effcdd3) ThemePicker: Many UI / layout consistency fixes &amp; improvements
  
  Author: Ido Ben-Hur  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [7d7505c](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/7d7505c) ThemePicker: Show our apps in icon previews
  
  Author: Demon000  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [921a622](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/921a622) ThemePicker: Vertically center the text of customization options
  
  Author: Ido Ben-Hur  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [8d4c0a3](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/8d4c0a3) ThemePicker: Bring back fonts, icon pack, shape customization
  
  Author: Anay Wadhera  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [877d588](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/877d588) stub: Import extra color bundles from TQ2A.230305.008.C1
  
  Author: Michael Bestas  
  Date: Thu Jul 31 15:25:00 2025 +0300


</details>

<details>
<summary><b>packages/apps/Twelve</b></summary>

- [397c8ca](https://github.com/LineageOS/android_packages_apps_Twelve/commit/397c8ca) Automatic translation import
  
  Author: LineageOS Infra  
  Date: Fri Aug 1 21:13:55 2025 +0000

- [8b48e37](https://github.com/LineageOS/android_packages_apps_Twelve/commit/8b48e37) Twelve: Fix typo in string name
  
  Author: Inhishonor  
  Date: Fri Aug 1 19:45:36 2025 +0000


</details>

<details>
<summary><b>prebuilts/tools-lineage</b></summary>

- [6122a66](https://github.com/LineageOS/android_prebuilts_tools-lineage/commit/6122a66) tools-lineage: Expose `mogrify` as `prebuilt_build_tool`
  
  Author: Yumi Yukimura  
  Date: Fri Aug 15 17:26:44 2025 +0800


</details>

<details>
<summary><b>tools/extract-utils</b></summary>

- [65b9f3a](https://github.com/LineageOS/android_tools_extract-utils/commit/65b9f3a) extract_utils: sort only groups of blobs
  
  Author: LuK1337  
  Date: Thu Aug 7 08:53:25 2025 +0200


</details>

<details>
<summary><b>vendor/lineage</b></summary>

- [b3e6f3a](https://github.com/LineageOS/android_vendor_lineage/commit/b3e6f3a) charger: Convert to Android.bp
  
  Author: Yumi Yukimura  
  Date: Mon Aug 18 19:26:28 2025 +0000

- [3b29ed3](https://github.com/LineageOS/android_vendor_lineage/commit/3b29ed3) bootanimation: Convert to Android.bp
  
  Author: Yumi Yukimura  
  Date: Mon Aug 18 19:26:28 2025 +0000

- [2d4dffd](https://github.com/LineageOS/android_vendor_lineage/commit/2d4dffd) lineage: Convert build-manifest.xml to Android.bp
  
  Author: Yumi Yukimura  
  Date: Mon Aug 18 19:26:28 2025 +0000

- [6d29d0c](https://github.com/LineageOS/android_vendor_lineage/commit/6d29d0c) config: Remove LiveDisplay HIDL from FCM
  
  Author: Bruno Martins  
  Date: Mon Aug 18 19:21:25 2025 +0000

- [b105652](https://github.com/LineageOS/android_vendor_lineage/commit/b105652) config: Remove fastcharge HIDL from FCM
  
  Author: Michael Bestas  
  Date: Mon Aug 18 19:21:25 2025 +0000

- [d52e994](https://github.com/LineageOS/android_vendor_lineage/commit/d52e994) config: Add vendor.lineage.livedisplay V1
  
  Author: LuK1337  
  Date: Mon Aug 18 19:21:25 2025 +0000

- [c0b4337](https://github.com/LineageOS/android_vendor_lineage/commit/c0b4337) config: Use a more accurate approach to locate device makefile for EPPE
  
  Author: Yumi Yukimura  
  Date: Mon Aug 18 15:14:27 2025 +0000

- [94968e7](https://github.com/LineageOS/android_vendor_lineage/commit/94968e7) APNs: Add Inwi (Morocco)
  
  Author: Onelots  
  Date: Sun Aug 17 20:43:26 2025 +0200

- [b9bca14](https://github.com/LineageOS/android_vendor_lineage/commit/b9bca14) kernel: Introduce macros for comparing versions and make use of them
  
  Author: LuK1337  
  Date: Sun Aug 17 17:45:37 2025 +0200

- [305124a](https://github.com/LineageOS/android_vendor_lineage/commit/305124a) release: Bump Security String to 2025-08-01
  
  Author: Michael Bestas  
  Date: Wed Aug 13 03:31:34 2025 +0000

- [1ab1a74](https://github.com/LineageOS/android_vendor_lineage/commit/1ab1a74) vars: August 2025 Security Update
  
  Author: Michael Bestas  
  Date: Tue Aug 12 19:02:02 2025 +0000

- [a3cc137](https://github.com/LineageOS/android_vendor_lineage/commit/a3cc137) Reapply &quot;lineage: Add framework compatibility matrix for Lineage HALs&quot;
  
  Author: LuK1337  
  Date: Sat Aug 9 11:09:16 2025 +0200

- [69945d6](https://github.com/LineageOS/android_vendor_lineage/commit/69945d6) Update APN settings for Odido/T-Mobile NL
  
  Author: Yannick Binnenweg  
  Date: Mon Aug 4 18:05:15 2025 +0000

- [fd1f593](https://github.com/LineageOS/android_vendor_lineage/commit/fd1f593) build: Make {aosp,clo}remote work when not in the root dir of the repo
  
  Author: LuK1337  
  Date: Wed Jul 30 21:46:20 2025 +0000

- [fa57999](https://github.com/LineageOS/android_vendor_lineage/commit/fa57999) build: Drop VARIANT_DEFCONFIG/SELINUX_DEFCONFIG support
  
  Author: Michael Bestas  
  Date: Wed Jul 30 14:03:05 2025 +0000

- [46fea3f](https://github.com/LineageOS/android_vendor_lineage/commit/46fea3f) build: Drop separate recovery kernel support
  
  Author: Michael Bestas  
  Date: Wed Jul 30 14:03:05 2025 +0000

- [ca679dc](https://github.com/LineageOS/android_vendor_lineage/commit/ca679dc) release: Remove no longer used Pixel flags
  
  Author: Michael Bestas  
  Date: Wed Jul 30 03:07:13 2025 +0300

- [47a3088](https://github.com/LineageOS/android_vendor_lineage/commit/47a3088) apns: Update US Mobile APNs
  
  Author: Alexander Koskovich  
  Date: Tue Jul 29 22:45:19 2025 +0000

- [b3a50f2](https://github.com/LineageOS/android_vendor_lineage/commit/b3a50f2) apns: Add AT&amp;T 5G NSA &amp; SA APNs (310
  
  Author: 410) from att5g[sa]_us-64000000006  
  Date: Alexander Koskovich|Sat Jul 26 19:27:45 2025 +0000

- [0904318](https://github.com/LineageOS/android_vendor_lineage/commit/0904318) Revert &quot;soong: Make mkdir install dir optional&quot;
  
  Author: LuK1337  
  Date: Sat Jul 26 10:51:22 2025 +0200

- [a69dfb1](https://github.com/LineageOS/android_vendor_lineage/commit/a69dfb1) apns-conf: Update carriers from the Philippines
  
  Author: Marc Bourgoin  
  Date: Fri Jul 25 18:22:57 2025 +0000

- [39d7fef](https://github.com/LineageOS/android_vendor_lineage/commit/39d7fef) apns: Update Verizon (311
  
  Author: 480) from verizon_us-64000000022  
  Date: Alexander Koskovich|Fri Jul 25 09:55:14 2025 -0400

- [69dee3f](https://github.com/LineageOS/android_vendor_lineage/commit/69dee3f) apns: Update Xfinity Mobile MVNO (311
  
  Author: 480) from xfinity_us-64000000012  
  Date: Alexander Koskovich|Fri Jul 25 09:55:10 2025 -0400

- [6453756](https://github.com/LineageOS/android_vendor_lineage/commit/6453756) Add mvno_match_data to StraightTalk Verizon
  
  Author: Alexander Koskovich  
  Date: Fri Jul 25 09:55:06 2025 -0400

- [e41ae16](https://github.com/LineageOS/android_vendor_lineage/commit/e41ae16) kernel: Fix building x86 kernel with GCC
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [c8ecd22](https://github.com/LineageOS/android_vendor_lineage/commit/c8ecd22) kernel: Sign kernel modules only if CONFIG_MODULE_SIG_FORMAT=y
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [8c65077](https://github.com/LineageOS/android_vendor_lineage/commit/8c65077) kernel: Fix build when device does not set BOARD_SYSTEM_KERNEL_MODULES_LOAD
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [56ed385](https://github.com/LineageOS/android_vendor_lineage/commit/56ed385) kernel: Support installing kernel modules to system
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [2bd07a4](https://github.com/LineageOS/android_vendor_lineage/commit/2bd07a4) kernel: Add support for external kernel configs (v2)
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [751388d](https://github.com/LineageOS/android_vendor_lineage/commit/751388d) kernel: Enhancements to searching DTBs during non-QCOM DTB image generation
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [8d9c8c0](https://github.com/LineageOS/android_vendor_lineage/commit/8d9c8c0) overlay: tablet: Enable config_canInternalDisplayHostDesktops
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [205806c](https://github.com/LineageOS/android_vendor_lineage/commit/205806c) overlay: tablet: Update lockscreen widget feature config for 16
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [089fa84](https://github.com/LineageOS/android_vendor_lineage/commit/089fa84) common: Allow vendors to exclude bp paths
  
  Author: Aaron Kling  
  Date: Tue Jul 22 06:01:23 2025 +0000


</details>

<details>
<summary><b>hardware/qcom-caf/sm8450/audio/pal</b></summary>

- [45d066e](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/45d066e) ResourceManager: fix activeStreams check
  
  Author: Tommaso Fonda  
  Date: Sat Jul 26 21:31:55 2025 +0000


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/audio/pal</b></summary>

- [1233949](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/1233949) vui_interface: Address more compilation errors
  
  Author: Bruno Martins  
  Date: Tue Jul 22 17:46:52 2025 +0530


</details>

<details>
<summary><b>lineage/hudson</b></summary>

- [c38f087](https://github.com/LineageOS/hudson/commit/c38f087) nx659j is back to the game
  
  Author: Wiktor Rudzki  
  Date: Wed Aug 6 18:52:52 2025 +0200

- [25bbe2a](https://github.com/LineageOS/hudson/commit/25bbe2a) hudson: Revive r8q
  
  Author: Atakan  
  Date: Sun Jul 27 15:32:45 2025 +0000

- [48fecb4](https://github.com/LineageOS/hudson/commit/48fecb4) hudson: Add Nothing Phone (2) (Pong)
  
  Author: chandu078  
  Date: Sun Jul 27 11:37:10 2025 +0530

- [96ade60](https://github.com/LineageOS/hudson/commit/96ade60) hudson: Add Galaxy Tab S7 (LTE)
  
  Author: Bruno Martins  
  Date: Wed Jul 23 21:24:45 2025 +0100


</details>

<details>
<summary><b>lineage/wiki</b></summary>

- [60e568e](https://github.com/LineageOS/lineage_wiki/commit/60e568e) wiki: Update Pong battery tech and models
  
  Author: chandu078  
  Date: Tue Aug 12 09:16:15 2025 +0000

- [5af8d95](https://github.com/LineageOS/lineage_wiki/commit/5af8d95) wiki: filename.zip -&gt; /path/to/zip
  
  Author: LuK1337  
  Date: Fri Aug 8 11:45:21 2025 +0200

- [5b4f098](https://github.com/LineageOS/lineage_wiki/commit/5b4f098) wiki: Revive nx659j
  
  Author: Wiktor Rudzki  
  Date: Wed Aug 6 18:56:04 2025 +0200

- [9fe2afe](https://github.com/LineageOS/lineage_wiki/commit/9fe2afe) wiki: Switch Oxygen Updater download URL from Google Play to GitHub
  
  Author: LuK1337  
  Date: Sat Aug 2 15:56:40 2025 +0200

- [f844c2d](https://github.com/LineageOS/lineage_wiki/commit/f844c2d) wiki: Improve wording and commands in blob extraction
  
  Author: Inhishonor  
  Date: Thu Jul 31 14:50:38 2025 -0400

- [e01bffa](https://github.com/LineageOS/lineage_wiki/commit/e01bffa) wiki: Fix wording in brotli archive extraction
  
  Author: Inhishonor  
  Date: Thu Jul 31 18:48:01 2025 +0000

- [8532bf2](https://github.com/LineageOS/lineage_wiki/commit/8532bf2) wiki: Remove links to OnePlus softwareupgrade page
  
  Author: LuK1337  
  Date: Wed Jul 30 17:31:22 2025 +0200

- [75f7b3d](https://github.com/LineageOS/lineage_wiki/commit/75f7b3d) wiki: Link to the latest payload-dumper-go release
  
  Author: LuK1337  
  Date: Wed Jul 30 17:26:33 2025 +0200

- [b321d04](https://github.com/LineageOS/lineage_wiki/commit/b321d04) wiki: Improve wording of the adb_flash_success tip
  
  Author: Inhishonor  
  Date: Mon Jul 28 17:55:52 2025 -0700

- [69d8033](https://github.com/LineageOS/lineage_wiki/commit/69d8033) wiki: Change formatting of commands in install and upgrade
  
  Author: Inhishonor  
  Date: Mon Jul 28 17:55:45 2025 -0700

- [f93d830](https://github.com/LineageOS/lineage_wiki/commit/f93d830) wiki: devices: Revive r8q
  
  Author: Atakan  
  Date: Sun Jul 27 18:20:06 2025 +0300

- [597c567](https://github.com/LineageOS/lineage_wiki/commit/597c567) wiki: Add `current_branch` validation
  
  Author: LuK1337  
  Date: Sun Jul 27 11:44:17 2025 +0200

- [49ddbc9](https://github.com/LineageOS/lineage_wiki/commit/49ddbc9) wiki: Add Nothing Phone (2)
  
  Author: chandu078  
  Date: Sun Jul 27 09:43:45 2025 +0000

- [ab3acc6](https://github.com/LineageOS/lineage_wiki/commit/ab3acc6) wiki: Sort nuwa&#x27;s peripherals
  
  Author: LuK1337  
  Date: Sun Jul 27 11:24:04 2025 +0200

- [697f827](https://github.com/LineageOS/lineage_wiki/commit/697f827) wiki: Add Galaxy Tab S7 (LTE)
  
  Author: Bruno Martins  
  Date: Thu Jul 24 20:58:07 2025 +0000

- [cc19403](https://github.com/LineageOS/lineage_wiki/commit/cc19403) wiki: devices: Add ZTE Axon 9 Pro (akershus)
  
  Author: Andrey Sprynga  
  Date: Tue Jul 22 13:57:10 2025 +0700


</details>

<details>
<summary><b>lineage/mirror</b></summary>

- [4148dda](https://github.com/LineageOS/mirror/commit/4148dda) Updated to 20-Aug-2025 22:01 UTC
  
  Author: Tim Schumacher  
  Date: Thu Aug 21 00:01:32 2025 +0200

- [357e63f](https://github.com/LineageOS/mirror/commit/357e63f) Updated to 13-Aug-2025 22:01 UTC
  
  Author: Tim Schumacher  
  Date: Thu Aug 14 00:01:31 2025 +0200

- [ad7d32a](https://github.com/LineageOS/mirror/commit/ad7d32a) Updated aosp-minimal to 09-Aug-2025 21:24 UTC
  
  Author: Tim Schumacher  
  Date: Sat Aug 9 23:24:49 2025 +0200


</details>

---

_Auto-generated by GitHub Actions. Displays recent LineageOS source commit activity for development reference._
