# 📜 LineageOS Source Changes (Last 10 Days)

<details>
<summary><b>android</b></summary>

- [e868a1e](https://github.com/LineageOS/android/commit/e868a1e) lineage: Update qcom repos for 16
  
  Author: Michael Bestas  
  Date: Sat Jul 5 18:02:19 2025 +0300

- [bba1d1d](https://github.com/LineageOS/android/commit/bba1d1d) manifest: Switch to lineage-23.0 branch
  
  Author: Michael Bestas  
  Date: Mon Jun 16 03:44:24 2025 +0300

- [3e6fccf](https://github.com/LineageOS/android/commit/3e6fccf) lineage: Remove commented out NXP repos
  
  Author: Michael Bestas  
  Date: Sat Jul 5 17:37:12 2025 +0300

- [e3b0948](https://github.com/LineageOS/android/commit/e3b0948) lineage: Track sun repos
  
  Author: Bruno Martins  
  Date: Sat Jul 5 11:28:06 2025 +0100

- [329966a](https://github.com/LineageOS/android/commit/329966a) lineage: Move current sthal-ar and thermal to legacy
  
  Author: Bruno Martins  
  Date: Sat Jul 5 12:56:57 2025 +0100

- [8de3399](https://github.com/LineageOS/android/commit/8de3399) manifest: Track vendor/qcom/opensource/audio
  
  Author: LuK1337  
  Date: Thu Jun 19 12:25:18 2025 +0200


</details>

<details>
<summary><b>build/soong</b></summary>

- [3c38cfe](https://github.com/LineageOS/android_build_soong/commit/3c38cfe) Rust: Use nehalem cpu-target when building with sandybridge arch variant
  
  Author: hmtheboy154  
  Date: Thu Mar 20 07:02:14 2025 -0400

- [29ad702](https://github.com/LineageOS/android_build_soong/commit/29ad702) soong: Treat vendor/lineage-priv/* as release-keys
  
  Author: LuK1337  
  Date: Wed Feb 19 18:36:13 2025 +0100

- [535dc7e](https://github.com/LineageOS/android_build_soong/commit/535dc7e) check_boot_jars: Add NT packages to whitelist
  
  Author: aswin7469  
  Date: Sun Mar 31 19:46:20 2024 +0530

- [3153c86](https://github.com/LineageOS/android_build_soong/commit/3153c86) check_boot_jars: Add oplus packages to whitelist
  
  Author: Bruno Martins  
  Date: Thu Aug 22 03:06:58 2024 +0100

- [868898e](https://github.com/LineageOS/android_build_soong/commit/868898e) check_boot_jars: Add Lineage SDK packages
  
  Author: LuK1337  
  Date: Wed Nov 2 15:37:30 2022 +0100

- [57695ef](https://github.com/LineageOS/android_build_soong/commit/57695ef) check_boot_jars: Add nvidia packages to whitelist
  
  Author: LuK1337  
  Date: Sat Mar 5 14:20:46 2022 +0100

- [ea8cb8b](https://github.com/LineageOS/android_build_soong/commit/ea8cb8b) check_boot_jars: Add IFAA Manager to whitelist
  
  Author: Michael Bestas  
  Date: Mon Oct 14 21:55:42 2019 +0300

- [fabb2d4](https://github.com/LineageOS/android_build_soong/commit/fabb2d4) Add qcom.fmradio and org.codeaurora.internal to allowlist
  
  Author: Scott Lobdell  
  Date: Fri Jul 2 21:53:30 2021 +0000

- [01cf87b](https://github.com/LineageOS/android_build_soong/commit/01cf87b) Conditionally use Unix epoch time for build incremental
  
  Author: Michael Bestas  
  Date: Wed Oct 30 19:53:42 2024 +0200

- [0e4ed11](https://github.com/LineageOS/android_build_soong/commit/0e4ed11) gen_build_prop: Stop overriding ro.build.display.id for non-user builds
  
  Author: basamaryan  
  Date: Tue Oct 22 12:08:07 2024 -0400

- [ec0e98b](https://github.com/LineageOS/android_build_soong/commit/ec0e98b) gen_build_prop: Set ro.lineage.device
  
  Author: Michael Bestas  
  Date: Sun Oct 20 07:20:42 2024 +0300

- [2f370bf](https://github.com/LineageOS/android_build_soong/commit/2f370bf) gen_build_prop: Set ro.minui.default_touch_rotation
  
  Author: Michael Bestas  
  Date: Thu Oct 17 17:27:05 2024 +0300

- [2e0c15f](https://github.com/LineageOS/android_build_soong/commit/2e0c15f) gen_build_prop: Set ro.build.fingerprint
  
  Author: Michael Bestas  
  Date: Thu Oct 17 06:10:07 2024 +0300

- [aff0163](https://github.com/LineageOS/android_build_soong/commit/aff0163) Add support for prop overrides
  
  Author: Luca Stefani  
  Date: Sat Sep 7 11:49:03 2024 +0200

- [98de7f8](https://github.com/LineageOS/android_build_soong/commit/98de7f8) install_symlink: Make symlink target configurable
  
  Author: Luca Stefani  
  Date: Fri Apr 11 13:57:17 2025 +0200

- [a5b351d](https://github.com/LineageOS/android_build_soong/commit/a5b351d) soong: paths: Fix out of tree $OUT
  
  Author: Cosmin Tanislav  
  Date: Wed Mar 20 23:16:26 2024 -0400

- [25aa912](https://github.com/LineageOS/android_build_soong/commit/25aa912) soong: Add equivalent for LOCAL_EXPORT_CFLAGS
  
  Author: Alessandro Astone  
  Date: Thu Oct 1 12:59:27 2020 +0200

- [a69c159](https://github.com/LineageOS/android_build_soong/commit/a69c159) sandbox_linux: set CCACHE_DIR as a writable path
  
  Author: daniml3  
  Date: Mon Oct 11 14:12:34 2021 +0200

- [8736cf0](https://github.com/LineageOS/android_build_soong/commit/8736cf0) Add Init_rc to Product_variables.Eng
  
  Author: dianlujitao  
  Date: Sun Feb 20 23:57:22 2022 +0800

- [e736b51](https://github.com/LineageOS/android_build_soong/commit/e736b51) Add exported-to-kati namespaces to root namespace
  
  Author: LuK1337  
  Date: Sun Jan 16 20:44:58 2022 +0100

- [a0310f9](https://github.com/LineageOS/android_build_soong/commit/a0310f9) Support prebuilt_kernel_headers
  
  Author: Aaron Kling  
  Date: Wed Apr 16 20:56:20 2025 -0500

- [0d23c01](https://github.com/LineageOS/android_build_soong/commit/0d23c01) Replace {device,qti}_kernel_headers only when building inline
  
  Author: Chirayu Desai  
  Date: Fri Dec 10 23:28:28 2021 +0530

- [3eaf137](https://github.com/LineageOS/android_build_soong/commit/3eaf137) Replace qti_kernel_headers with generated_kernel_headers
  
  Author: Nolen Johnson  
  Date: Thu Dec 9 18:29:31 2021 -0500

- [f8da489](https://github.com/LineageOS/android_build_soong/commit/f8da489) Replace device_kernel_headers with generated_kernel_headers
  
  Author: Chirayu Desai  
  Date: Sat Jan 30 20:08:32 2021 +0530

- [a24154f](https://github.com/LineageOS/android_build_soong/commit/a24154f) soong: Add PathForSourceRelaxed
  
  Author: Sam Mortimer  
  Date: Thu Sep 5 15:16:13 2019 -0700

- [77cf41c](https://github.com/LineageOS/android_build_soong/commit/77cf41c) soong: Squash of lineage-sdk bringup commits
  
  Author: Rashed Abdel-Tawab  
  Date: Thu Aug 9 14:08:53 2018 -0700

- [b1ab9a8](https://github.com/LineageOS/android_build_soong/commit/b1ab9a8) Make soong-shared public
  
  Author: Michael Bestas  
  Date: Fri Dec 6 19:11:01 2024 +0200


</details>

<details>
<summary><b>device/qcom/sepolicy</b></summary>

- [7556ede](https://github.com/LineageOS/android_device_qcom_sepolicy/commit/7556ede) generic: Don&#x27;t dontaudit vendor_persist_camera_prop read denials
  
  Author: Arian  
  Date: Fri Apr 1 23:54:28 2022 +0200

- [8a125d6](https://github.com/LineageOS/android_device_qcom_sepolicy/commit/8a125d6) sepolicy: Unlabel aux camera whitelist prop
  
  Author: dianlujitao  
  Date: Thu May 7 22:43:01 2020 +0800

- [2af8ac0](https://github.com/LineageOS/android_device_qcom_sepolicy/commit/2af8ac0) sepolicy: Remove QCOM guards
  
  Author: Pig  
  Date: Sat Sep 19 09:41:05 2020 +0800

- [f890d65](https://github.com/LineageOS/android_device_qcom_sepolicy/commit/f890d65) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Tue May 31 01:17:08 2022 +0530


</details>

<details>
<summary><b>external/libncurses</b></summary>

- [cf8d1a3](https://github.com/LineageOS/android_external_libncurses/commit/cf8d1a3) Partially Reapply &quot;libncurses: Add recovery variant&quot;
  
  Author: Yumi Yukimura  
  Date: Wed Oct 16 17:39:18 2024 +0000


</details>

<details>
<summary><b>hardware/qcom-caf/common</b></summary>

- [b5edacb](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/b5edacb) qcom: Include additional wlan soong namespace
  
  Author: Michael Bestas  
  Date: Sat Jul 5 17:12:11 2025 +0300

- [945ea1d](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/945ea1d) qcom: Update thermal HAL namespace selection
  
  Author: Michael Bestas  
  Date: Sat Jul 5 11:07:08 2025 +0300

- [7f93034](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/7f93034) common: add support for sun platform
  
  Author: dianlujitao  
  Date: Thu Jan 23 22:48:49 2025 +0800


</details>

<details>
<summary><b>hardware/qcom-caf/sm8150/audio</b></summary>

- [d1ae1d8](https://github.com/LineageOS/android_hardware_qcom_audio/commit/d1ae1d8) hal: Convert audio extensions to blueprint
  
  Author: Michael Bestas  
  Date: Thu Jan 16 10:07:30 2025 +0200

- [0ab2e99](https://github.com/LineageOS/android_hardware_qcom_audio/commit/0ab2e99) hal: Convert primary HAL to blueprint
  
  Author: Michael Bestas  
  Date: Thu Jan 16 11:02:48 2025 +0200

- [a2635f7](https://github.com/LineageOS/android_hardware_qcom_audio/commit/a2635f7) hal: Remove unused libmaxxaudio extension
  
  Author: Michael Bestas  
  Date: Thu Jan 16 11:02:45 2025 +0200

- [3524d26](https://github.com/LineageOS/android_hardware_qcom_audio/commit/3524d26) hal: Remove feature manager leftovers
  
  Author: Michael Bestas  
  Date: Thu Jan 16 11:02:36 2025 +0200

- [2e4850a](https://github.com/LineageOS/android_hardware_qcom_audio/commit/2e4850a) audio: Remove all unsupported platforms &amp; flags
  
  Author: Michael Bestas  
  Date: Tue Jan 14 23:40:43 2025 +0200


</details>

<details>
<summary><b>hardware/qcom-caf/sm8250/audio</b></summary>

- [da531fc](https://github.com/LineageOS/android_hardware_qcom_audio/commit/da531fc) hal: Convert audio extensions to blueprint
  
  Author: Michael Bestas  
  Date: Thu Jan 16 10:07:30 2025 +0200

- [ddcba87](https://github.com/LineageOS/android_hardware_qcom_audio/commit/ddcba87) hal: Convert primary HAL to blueprint
  
  Author: Michael Bestas  
  Date: Thu Jan 16 11:02:48 2025 +0200

- [1b41703](https://github.com/LineageOS/android_hardware_qcom_audio/commit/1b41703) hal: Remove unused libmaxxaudio extension
  
  Author: Michael Bestas  
  Date: Thu Jan 16 11:02:45 2025 +0200

- [1e237e4](https://github.com/LineageOS/android_hardware_qcom_audio/commit/1e237e4) hal: Remove feature manager leftovers
  
  Author: Michael Bestas  
  Date: Thu Jan 16 11:02:36 2025 +0200

- [963f203](https://github.com/LineageOS/android_hardware_qcom_audio/commit/963f203) audio: Remove all unsupported platforms &amp; flags
  
  Author: Michael Bestas  
  Date: Tue Jan 14 23:40:43 2025 +0200


</details>

<details>
<summary><b>hardware/qcom-caf/sm8350/audio</b></summary>

- [4667d22](https://github.com/LineageOS/android_hardware_qcom_audio/commit/4667d22) hal: Convert audio extensions to blueprint
  
  Author: Michael Bestas  
  Date: Thu Jan 16 10:07:30 2025 +0200

- [aadba09](https://github.com/LineageOS/android_hardware_qcom_audio/commit/aadba09) hal: Convert primary HAL to blueprint
  
  Author: Michael Bestas  
  Date: Thu Jan 16 11:02:48 2025 +0200

- [21ffff9](https://github.com/LineageOS/android_hardware_qcom_audio/commit/21ffff9) hal: Remove unused libmaxxaudio extension
  
  Author: Michael Bestas  
  Date: Thu Jan 16 11:02:45 2025 +0200

- [2aa790a](https://github.com/LineageOS/android_hardware_qcom_audio/commit/2aa790a) hal: Remove feature manager leftovers
  
  Author: Michael Bestas  
  Date: Thu Jan 16 11:02:36 2025 +0200

- [07aa306](https://github.com/LineageOS/android_hardware_qcom_audio/commit/07aa306) audio: Remove all unsupported platforms &amp; flags
  
  Author: Michael Bestas  
  Date: Tue Jan 14 23:40:43 2025 +0200


</details>

<details>
<summary><b>hardware/qcom-caf/bootctrl</b></summary>

- [4f73a95](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/4f73a95) gpt-utils: fsync after block device writes
  
  Author: Akilesh Kailash  
  Date: Wed Dec 23 18:43:49 2020 +0000

- [4b0a3c5](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/4b0a3c5) bootctrl: don&#x27;t assume both partition&#x27;s slots are on the same disk
  
  Author: Dan Pasanen  
  Date: Mon Jan 15 18:14:38 2018 -0600

- [52e9483](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/52e9483) gpt-utils: Add OTA support for HTC partitions
  
  Author: Nolen Johnson  
  Date: Tue Mar 4 20:07:09 2025 -0500

- [2afc9b6](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/2afc9b6) gpt-utils: Add OTA support for LGE partitions
  
  Author: Nolen Johnson  
  Date: Tue Mar 4 20:02:16 2025 -0500

- [6f37662](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/6f37662) gpt-utils: Add OTA support for legacy Motorola partitions
  
  Author: Nolen Johnson  
  Date: Tue Mar 4 20:01:23 2025 -0500

- [c8f07ef](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/c8f07ef) gpt-utils: skip swapping xbl_config slots
  
  Author: Cosmin Tanislav  
  Date: Wed Feb 19 19:25:48 2025 +0200

- [5d6fa89](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/5d6fa89) bootctrl/gpt-utils: Check for full partiton name instead of partial prefix
  
  Author: SGCMarkus  
  Date: Mon Oct 24 20:34:48 2022 +0200

- [712d4bd](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/712d4bd) gpt-utils: Add OTA support for FIH Nokia partitions
  
  Author: Tuan Anh  
  Date: Mon Feb 24 13:31:03 2025 +0700

- [69aa245](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/69aa245) gpt-utils: Add OTA support for Razer partitions
  
  Author: Michael Bestas  
  Date: Fri Feb 21 00:14:17 2025 +0200

- [85bad34](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/85bad34) gpt-utils: Add OTA support for Motorola partitions
  
  Author: Cosmin Tanislav  
  Date: Wed Feb 19 02:23:37 2025 +0200

- [d6a1505](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/d6a1505) gpt-utils: split PTN_SWAP_LIST across lines
  
  Author: Cosmin Tanislav  
  Date: Wed Feb 19 02:19:09 2025 +0200

- [3d89f3b](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/3d89f3b) gpt-utils: Make BSG/SG configurable
  
  Author: Michael Bestas  
  Date: Fri Feb 7 00:30:29 2025 +0200

- [f5b482a](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/f5b482a) gpt-utils: Add OTA support for pdp partition
  
  Author: dianlujitao  
  Date: Thu Jan 30 18:40:13 2025 +0800

- [85b460b](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/85b460b) gpt-utils: Fix build errors
  
  Author: LuK1337  
  Date: Thu May 27 20:44:42 2021 +0200

- [c1b214f](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/c1b214f) gpt-utils: Drop unnecessary include
  
  Author: LuK1337  
  Date: Sun Sep 27 16:12:10 2020 +0200

- [eadabf9](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/eadabf9) gpt-utils: Drop unnecessary include
  
  Author: LuK1337  
  Date: Mon Sep 9 22:38:02 2019 +0200

- [6074f2b](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/6074f2b) gpt-utils: Address the warnings
  
  Author: Tao Bao  
  Date: Fri Jun 8 13:11:57 2018 -0700

- [9f5c812](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/9f5c812) gpt-utils: Use generated_kernel_headers
  
  Author: LuK1337  
  Date: Mon Sep 9 21:55:59 2019 +0200

- [871afdd](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/871afdd) Import gpt-utils from LA.VENDOR.14.3.0.r1-19100-lanai.QSSI16.0
  
  Author: Alexander Koskovich  
  Date: Sun Jun 26 16:01:14 2022 -0700

- [1740fc1](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/1740fc1) Partially revert: &quot;Stricter stat when checking for blockdevices&quot;
  
  Author: Cosmin Tanislav  
  Date: Thu Mar 6 18:55:23 2025 +0200

- [d7c1af1](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/d7c1af1) Stricter stat when checking for blockdevices
  
  Author: Håkan Kvist  
  Date: Tue Jun 7 15:21:51 2022 +0200

- [d16a2d4](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/d16a2d4) Remove goto statements
  
  Author: Håkan Kvist  
  Date: Wed Jun 1 22:03:59 2022 +0200

- [8306131](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/8306131) Add function to get active boot slot
  
  Author: Tianjie  
  Date: Mon Nov 30 17:40:38 2020 -0800

- [f258c56](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/f258c56) bootcontrol: count slots correctly
  
  Author: Connor O'Brien  
  Date: Fri Oct 27 15:31:01 2017 -0700

- [4571299](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/4571299) [LSC] Add LOCAL_LICENSE_KINDS to hardware/qcom/bootctrl
  
  Author: Bob Badour  
  Date: Fri Feb 12 14:40:44 2021 -0800

- [e8d1787](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/e8d1787) Add METADATA to bootctrl: BSD=NOTICE
  
  Author: Bob Badour  
  Date: Fri May 1 10:06:29 2020 -0700

- [a3d9c8f](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/a3d9c8f) bootctrl: convert AIDL executables to defaults
  
  Author: dianlujitao  
  Date: Fri Jan 24 23:20:01 2025 +0800

- [4ab0775](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/4ab0775) aidl: Use libboot_control_qti_defaults instead of shared lib
  
  Author: Mohd Faraz  
  Date: Fri Sep 20 00:47:54 2024 +0530

- [37a6e59](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/37a6e59) bootctrl: Enabling bootctrl for gvmq beased on property
  
  Author: Tabassum Tabassum  
  Date: Thu Sep 9 10:08:57 2021 +0530

- [fd32366](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/fd32366) Move mGvmqPlatform from header file to cpp
  
  Author: LuK1337  
  Date: Sat Jan 15 18:04:02 2022 +0100

- [9a09e53](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/9a09e53) Expose 1.1/1.2 impls via cc_defaults
  
  Author: LuK1337  
  Date: Tue Jan 5 14:15:09 2021 +0100

- [7ca588d](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/7ca588d) Build bootctrl.sdm845 using Android.bp
  
  Author: Hridya Valsaraju  
  Date: Mon Aug 20 14:03:21 2018 -0700

- [01f24aa](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/01f24aa) Drop dependency on librecovery_updater
  
  Author: LuK1337  
  Date: Tue Jan 5 13:36:22 2021 +0100

- [518da6d](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/518da6d) fuzzer: Correct bootctrl path
  
  Author: Michael Bestas  
  Date: Fri Jul 4 22:08:31 2025 +0300

- [59dab45](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/59dab45) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jun 16 18:08:56 2022 +0530


</details>

<details>
<summary><b>hardware/qcom-caf/thermal</b></summary>

- [a30fbc2](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/a30fbc2) Merge tag &#x27;LA.VENDOR.1.0.r1-27600-WAIPIO.QSSI15.0&#x27; of https://git.codelinaro.org/clo/la/platform/hardware/qcom/thermal into lineage-23.0
  
  Author: Michael Bestas  
  Date: Sat Jul 5 11:05:17 2025 +0300

- [b650213](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/b650213) thermal-hal: Add more thermal throttling severities support for kailua
  
  Author: Michael Bestas  
  Date: Sat Jul 5 10:03:43 2025 +0300

- [8378c78](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/8378c78) Merge tag &#x27;LA.VENDOR.13.2.0.r1-26600-KAILUA.QSSI16.0&#x27; of https://git.codelinaro.org/clo/la/platform/hardware/qcom/thermal into lineage-23.0
  
  Author: Michael Bestas  
  Date: Sat Jul 5 09:58:54 2025 +0300

- [9803655](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/9803655) thermal-hal: Enable no trip set flag to not to set trip point 1 for lanai
  
  Author: Michael Bestas  
  Date: Sat Jul 5 09:30:13 2025 +0300

- [3664dd0](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/3664dd0) thermal-hal: Add more thermal throttling severities support for lanai
  
  Author: Michael Bestas  
  Date: Sat Jul 5 09:28:20 2025 +0300

- [4720b6a](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/4720b6a) Revert &quot;thermal-hal: Add namespace configuration for google specific path&quot;
  
  Author: Michael Bestas  
  Date: Sat Jul 5 09:31:50 2025 +0300

- [65957df](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/65957df) Merge tag &#x27;LA.VENDOR.14.3.0.r1-21600-lanai.QSSI15.0&#x27; of https://git.codelinaro.org/clo/la/platform/hardware/qcom/thermal into lineage-23.0
  
  Author: Michael Bestas  
  Date: Sat Jul 5 09:04:26 2025 +0300

- [a12a355](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/a12a355) thermal: Guard with soong namespace
  
  Author: Michael Bestas  
  Date: Sat Jul 5 08:12:13 2025 +0300

- [7dc802c](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/7dc802c) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jun 16 18:08:56 2022 +0530


</details>

<details>
<summary><b>hardware/qcom-caf/thermal-legacy-um</b></summary>

- [9cfce74](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/9cfce74) thermal: Guard with soong namespace
  
  Author: Michael Bestas  
  Date: Sat Jul 5 08:12:13 2025 +0300


</details>

<details>
<summary><b>hardware/qcom/wlan</b></summary>

- [640d7bc](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/640d7bc) wlan: Guard with soong namespace
  
  Author: Michael Bestas  
  Date: Sat Jul 5 11:47:56 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/wlan</b></summary>

- [6c45a9e](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/6c45a9e) wifihal: Disable support for Groupkeys
  
  Author: Vinay Gannevaram  
  Date: Tue Aug 27 12:43:43 2024 +0530

- [db2627a](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/db2627a) wifi: rename mode &#x27;ON&#x27; to &#x27;VOICE&#x27;.
  
  Author: Les Lee  
  Date: Tue Dec 5 09:19:42 2023 +0000

- [acc9beb](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/acc9beb) WifiHal: Implement wifi_set_voip_mode hal api
  
  Author: mukul sharma  
  Date: Fri Nov 25 14:51:10 2022 +0530

- [ea78c89](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/ea78c89) wpa_supplicant_lib: Allow -82dBm as non-SRG OBSS PD threshold
  
  Author: Madhvapathi Sriram  
  Date: Mon Nov 27 11:06:02 2023 +0200

- [9e609f3](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/9e609f3) wifihal: remove fatal keyword while sending alert event
  
  Author: mukul sharma  
  Date: Wed Jul 5 20:01:26 2023 +0530

- [f2bf4d5](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/f2bf4d5) wifiHal:Skip invalid channel when setting unsafe channels
  
  Author: Khanjan Desai  
  Date: Mon Apr 17 12:43:22 2023 +0530

- [451a64b](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/451a64b) wifi_hal: Fix KW issue
  
  Author: Baowei Liu  
  Date: Tue Mar 28 13:00:27 2023 +0800

- [0ae1e38](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/0ae1e38) wifi-hal: Only try LOWI once
  
  Author: Steve Kondik  
  Date: Tue Jun 28 23:53:28 2016 -0700

- [744defe](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/744defe) Wifi: Quiet some excessive debug output
  
  Author: Ethan Chen  
  Date: Sun Oct 16 23:57:43 2016 -0700

- [f17bd81](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/f17bd81) wifi-hal: stop the UMAC logspam
  
  Author: Altaf-Mahdi  
  Date: Mon Jul 11 16:03:06 2016 +0100

- [b767759](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/b767759) qcwcn: Address format compilation issues
  
  Author: Bruno Martins  
  Date: Tue Aug 1 22:29:29 2023 +0100

- [b262c03](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/b262c03) wpa_supplicant_8_lib: MAX_NUM_MLO_LINKS -&gt; MAX_NUM_MLD_LINKS
  
  Author: LuK1337  
  Date: Wed Dec 11 19:30:13 2024 +0100

- [60cbb50](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/60cbb50) wpa_supplicant_8_lib: Remove leftover Android.mk
  
  Author: Michael Bestas  
  Date: Sat Jul 5 12:09:39 2025 +0300

- [3d84819](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/3d84819) wlan: Guard with soong namespace
  
  Author: Michael Bestas  
  Date: Sat Jul 5 11:47:56 2025 +0300

- [85de2ff](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/85de2ff) wlan: Correct paths
  
  Author: Michael Bestas  
  Date: Sat Jul 5 17:10:02 2025 +0300

- [b94bc12](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/b94bc12) wlan-caf: Add guard makefile
  
  Author: Steve Kondik  
  Date: Sun Dec 28 02:32:53 2014 -0800

- [994d289](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/994d289) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jun 16 18:08:56 2022 +0530


</details>

<details>
<summary><b>packages/apps/Aperture</b></summary>

- [625df08](https://github.com/LineageOS/android_packages_apps_Aperture/commit/625df08) Aperture: Update gradle-generatebp to 1.25
  
  Author: Luca Stefani  
  Date: Wed Jun 11 15:45:08 2025 +0200

- [9bee4b4](https://github.com/LineageOS/android_packages_apps_Aperture/commit/9bee4b4) Aperture: Update Gradle wrapper and AGP
  
  Author: Luca Stefani  
  Date: Wed Jun 11 16:01:59 2025 +0200


</details>

<details>
<summary><b>packages/apps/Camelot</b></summary>

- [06312c6](https://github.com/LineageOS/android_packages_apps_Camelot/commit/06312c6) Camelot: Update gradle-generatebp to 1.25
  
  Author: Luca Stefani  
  Date: Wed Jun 11 15:45:08 2025 +0200

- [9232e88](https://github.com/LineageOS/android_packages_apps_Camelot/commit/9232e88) Camelot: Update Gradle wrapper and AGP
  
  Author: Luca Stefani  
  Date: Wed Jun 11 16:01:59 2025 +0200


</details>

<details>
<summary><b>packages/apps/Glimpse</b></summary>

- [5116f7f](https://github.com/LineageOS/android_packages_apps_Glimpse/commit/5116f7f) Glimpse: Update gradle-generatebp to 1.25
  
  Author: Luca Stefani  
  Date: Wed Jun 11 15:45:08 2025 +0200

- [caf360c](https://github.com/LineageOS/android_packages_apps_Glimpse/commit/caf360c) Glimpse: Update Gradle wrapper and AGP
  
  Author: Luca Stefani  
  Date: Wed Jun 11 16:01:59 2025 +0200


</details>

<details>
<summary><b>packages/apps/Twelve</b></summary>

- [10535cc](https://github.com/LineageOS/android_packages_apps_Twelve/commit/10535cc) Twelve: Update gradle-generatebp to 1.25
  
  Author: Luca Stefani  
  Date: Wed Jun 11 15:45:08 2025 +0200

- [94a5072](https://github.com/LineageOS/android_packages_apps_Twelve/commit/94a5072) Twelve: Update Gradle wrapper and AGP
  
  Author: Luca Stefani  
  Date: Wed Jun 11 16:01:59 2025 +0200

- [77df6b0](https://github.com/LineageOS/android_packages_apps_Twelve/commit/77df6b0) Twelve: Jellyfin: Use parent album thumbnail if available for items
  
  Author: Luca Stefani  
  Date: Tue Jul 1 13:53:44 2025 +0200

- [6bc2ad2](https://github.com/LineageOS/android_packages_apps_Twelve/commit/6bc2ad2) Twelve: Jellyfin: Request thumbnails with specific size
  
  Author: Luca Stefani  
  Date: Tue Jul 1 13:32:55 2025 +0200


</details>

<details>
<summary><b>tools/extract-utils</b></summary>

- [050cbd9](https://github.com/LineageOS/android_tools_extract-utils/commit/050cbd9) extract_utils: use null work-tree for getting the list of affected files
  
  Author: LuK1337  
  Date: Mon Jul 7 10:48:05 2025 +0200

- [c474cce](https://github.com/LineageOS/android_tools_extract-utils/commit/c474cce) extract_utils: use `apply` instead of `am`
  
  Author: LuK1337  
  Date: Sun Jul 6 12:25:10 2025 +0200

- [ab04367](https://github.com/LineageOS/android_tools_extract-utils/commit/ab04367) extract_utils: avoid passing non existent paths to git add
  
  Author: bengris32  
  Date: Sat Jul 5 16:51:14 2025 +0100

- [7ae70fa](https://github.com/LineageOS/android_tools_extract-utils/commit/7ae70fa) extract_utils: Consider path prefixes other than `smali/`
  
  Author: bengris32  
  Date: Sat Jul 5 00:05:22 2025 +0100

- [1186463](https://github.com/LineageOS/android_tools_extract-utils/commit/1186463) extract-utils: Apply relative path for apps with deep folder structures
  
  Author: Jyotiraditya Panda  
  Date: Fri Apr 11 14:13:40 2025 +0530

- [b2aa9c1](https://github.com/LineageOS/android_tools_extract-utils/commit/b2aa9c1) extract_utils: fix extraction of alternate partitions
  
  Author: Cosmin Tanislav  
  Date: Mon Jun 30 18:21:30 2025 +0300

- [6c57d7f](https://github.com/LineageOS/android_tools_extract-utils/commit/6c57d7f) extract_utils: make patching errors more descriptive
  
  Author: Cosmin Tanislav  
  Date: Wed Jun 25 22:46:53 2025 +0300

- [8356ba1](https://github.com/LineageOS/android_tools_extract-utils/commit/8356ba1) extract_utils: optimize patch application for big apps
  
  Author: Cosmin Tanislav  
  Date: Sun Jun 22 02:08:31 2025 +0300


</details>

<details>
<summary><b>vendor/codeaurora/telephony</b></summary>

- [2718fce](https://github.com/LineageOS/android_vendor_codeaurora_telephony/commit/2718fce) IMS: Add Motorola specific API for VT
  
  Author: dianlujitao  
  Date: Sun Feb 6 16:51:23 2022 +0800

- [71060a4](https://github.com/LineageOS/android_vendor_codeaurora_telephony/commit/71060a4) ims-ext: Restore getLteDataUsage method for backward compatibility
  
  Author: Bruno Martins  
  Date: Thu Jan 4 23:13:26 2024 +0000

- [d4a7edd](https://github.com/LineageOS/android_vendor_codeaurora_telephony/commit/d4a7edd) Revert &quot;IMS: Remove API and constants related to ECT.&quot;
  
  Author: Josh Chasky  
  Date: Mon Sep 21 14:00:08 2020 -0400

- [f2f163e](https://github.com/LineageOS/android_vendor_codeaurora_telephony/commit/f2f163e) Add legacy {get,set}AutoReject methods for backwards compat
  
  Author: Paul Keith  
  Date: Tue Nov 23 09:39:34 2021 -0600

- [85562e5](https://github.com/LineageOS/android_vendor_codeaurora_telephony/commit/85562e5) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jun 16 15:57:25 2022 +0530


</details>

<details>
<summary><b>vendor/lineage</b></summary>

- [91f3650](https://github.com/LineageOS/android_vendor_lineage/commit/91f3650) release: Bump Security String to 2025-07-01
  
  Author: Michael Bestas  
  Date: Thu Jul 10 11:12:22 2025 +0300

- [f4fe770](https://github.com/LineageOS/android_vendor_lineage/commit/f4fe770) release: Update SVN from BP2A.250705.008
  
  Author: Michael Bestas  
  Date: Thu Jul 10 11:10:24 2025 +0300

- [54fe338](https://github.com/LineageOS/android_vendor_lineage/commit/54fe338) vars: July 2025 &quot;Security update&quot;
  
  Author: Michael Bestas  
  Date: Wed Jul 9 15:43:14 2025 +0300

- [2acacf2](https://github.com/LineageOS/android_vendor_lineage/commit/2acacf2) apns-conf: Remove deprecated Cosmote Romania entries
  
  Author: PixelThrived  
  Date: Mon Jul 7 11:05:33 2025 +0300

- [7d2705e](https://github.com/LineageOS/android_vendor_lineage/commit/7d2705e) merge_dtbs: allow one overlay to depend on multiple others
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 2 23:02:37 2025 +0300

- [3e58b08](https://github.com/LineageOS/android_vendor_lineage/commit/3e58b08) vars: Update qcom tags for 16
  
  Author: Michael Bestas  
  Date: Sat Jul 5 18:10:34 2025 +0300

- [cbca3c1](https://github.com/LineageOS/android_vendor_lineage/commit/cbca3c1) vars: Update qcom tags
  
  Author: Michael Bestas  
  Date: Sun Jul 6 08:38:49 2025 +0300

- [00d9415](https://github.com/LineageOS/android_vendor_lineage/commit/00d9415) vars: Add sun tags
  
  Author: Bruno Martins  
  Date: Sat Jul 5 11:01:28 2025 +0100

- [74d4aec](https://github.com/LineageOS/android_vendor_lineage/commit/74d4aec) kernel: Automatically adapt path suffix for GKI modules
  
  Author: dianlujitao  
  Date: Sun Feb 2 19:06:49 2025 +0800

- [426b8a4](https://github.com/LineageOS/android_vendor_lineage/commit/426b8a4) repopick: Fix showing help when no arguments given the correct way
  
  Author: Julian Veit  
  Date: Sat Jul 5 09:08:02 2025 +0000

- [d67f867](https://github.com/LineageOS/android_vendor_lineage/commit/d67f867) config: Error out when using deprecated BoardConfig flags
  
  Author: Michael Bestas  
  Date: Fri Jun 27 12:39:11 2025 +0300

- [16b1b5f](https://github.com/LineageOS/android_vendor_lineage/commit/16b1b5f) repopick: Fix showing help when no arguments given
  
  Author: SpiritCroc  
  Date: Wed Jul 2 08:09:38 2025 +0200

- [281bef7](https://github.com/LineageOS/android_vendor_lineage/commit/281bef7) apn: Update China Telecom for MCC 460 MNC 11
  
  Author: Marc Bourgoin  
  Date: Sun Jun 15 12:52:57 2025 -0600


</details>

<details>
<summary><b>vendor/qcom/opensource/commonsys/audio</b></summary>

- [736c328](https://github.com/LineageOS/android_vendor_qcom_opensource_audio/commit/736c328) audio: Remove unused policy_hal
  
  Author: Michael Bestas  
  Date: Tue Jul 8 03:53:23 2025 +0300

- [e5749d4](https://github.com/LineageOS/android_vendor_qcom_opensource_audio/commit/e5749d4) hal_adapter: add service executable
  
  Author: LuK1337  
  Date: Thu Jun 19 12:45:55 2025 +0200

- [626acf1](https://github.com/LineageOS/android_vendor_qcom_opensource_audio/commit/626acf1) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jun 16 15:57:25 2022 +0530


</details>

<details>
<summary><b>vendor/qcom/opensource/commonsys-intf/audio</b></summary>

- [dc11010](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-commonsys-intf/commit/dc11010) audio: Remove unused Android.mk
  
  Author: Michael Bestas  
  Date: Tue Jul 8 03:50:58 2025 +0300

- [d975e99](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-commonsys-intf/commit/d975e99) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jun 16 15:57:25 2022 +0530


</details>

<details>
<summary><b>vendor/qcom/opensource/core-utils-vendor</b></summary>

- [ab23cec](https://github.com/LineageOS/android_vendor_qcom_opensource_core-utils-vendor/commit/ab23cec) qspaframework: Convert to blueprint
  
  Author: Michael Bestas  
  Date: Sun Jan 26 10:58:08 2025 +0200

- [d09ad36](https://github.com/LineageOS/android_vendor_qcom_opensource_core-utils-vendor/commit/d09ad36) fwd-detect: Create symlink target for CneApp
  
  Author: Bruno Martins  
  Date: Thu Mar 28 14:10:14 2024 +0000

- [f528a58](https://github.com/LineageOS/android_vendor_qcom_opensource_core-utils-vendor/commit/f528a58) Add .gitupstream file
  
  Author: Kevin F. Haggerty  
  Date: Sun Nov 20 08:21:43 2022 -0700


</details>

<details>
<summary><b>vendor/qcom/opensource/commonsys/display</b></summary>

- [4740d3d](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/4740d3d) commonsys: services: Delete device_obj_ to release the memory
  
  Author: Vinoth Jayaram  
  Date: Fri Jan 19 17:32:59 2024 +0530

- [a7343d4](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/a7343d4) DisplayConfig: Initialize service intf before registering service
  
  Author: Baldev Sahu  
  Date: Fri May 12 14:40:14 2023 +0530

- [f745420](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/f745420) displayConfig: Add size validation for client input parameter
  
  Author: Boreddy Mahidhar  
  Date: Mon Nov 14 22:26:39 2022 +0530

- [f8e65fc](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/f8e65fc) displayConfig: Add size validation for client input parameters
  
  Author: Boreddy Mahidhar  
  Date: Tue Sep 20 10:03:44 2022 +0530

- [34fa0bc](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/34fa0bc) displayconfig: Restrict the scope of death_service_mutex_
  
  Author: Vikas batchu  
  Date: Thu Mar 3 18:00:27 2022 +0530

- [3a0b5a2](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/3a0b5a2) display: Import display commonsys interfaces namespace
  
  Author: Michael Bestas  
  Date: Mon Nov 15 18:23:31 2021 +0200

- [eb67157](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/eb67157) display-commonsys: Define a soong namespace
  
  Author: Alessandro Astone  
  Date: Tue Jan 5 21:55:43 2021 +0100

- [6099588](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/6099588) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jun 16 15:57:25 2022 +0530


</details>

<details>
<summary><b>vendor/qcom/opensource/commonsys-intf/display</b></summary>

- [8452e92](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys-intf/commit/8452e92) Partially revert gralloc struct changes
  
  Author: Alessandro Astone  
  Date: Thu Jul 7 22:35:51 2022 +0200

- [7ff8d23](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys-intf/commit/7ff8d23) gralloc: Add plane layout component type blob
  
  Author: Tharaga Balachandran  
  Date: Thu Aug 24 12:40:11 2023 -0400

- [e5225b8](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys-intf/commit/e5225b8) display-commonsys-intf: Define a soong namespace
  
  Author: Alessandro Astone  
  Date: Tue Jan 5 21:55:43 2021 +0100

- [b6ff9fe](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys-intf/commit/b6ff9fe) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jun 16 15:57:25 2022 +0530


</details>

<details>
<summary><b>vendor/qcom/opensource/commonsys/fm</b></summary>

- [640159f](https://github.com/LineageOS/android_vendor_qcom_opensource_fm-commonsys/commit/640159f) Merge tag &#x27;LA.QSSI.16.0.r1-07300-qssi.0&#x27; of https://git.codelinaro.org/clo/la/platform/vendor/qcom-opensource/fm-commonsys into lineage-23.0
  
  Author: Michael Bestas  
  Date: Fri Jul 4 15:11:13 2025 +0300

- [4ef5df0](https://github.com/LineageOS/android_vendor_qcom_opensource_fm-commonsys/commit/4ef5df0) Revert &quot;jni: Remove btconfigstore remnants and make it build&quot;
  
  Author: Michael Bestas  
  Date: Fri Jul 4 15:04:50 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/healthd-ext</b></summary>

- [841c7f5](https://github.com/LineageOS/android_vendor_qcom_opensource_healthd-ext/commit/841c7f5) healthd-ext: update data type for members of array ucsiPSYName
  
  Author: Jishnu Prakash  
  Date: Wed Mar 13 16:15:24 2024 +0530

- [7dbf8ee](https://github.com/LineageOS/android_vendor_qcom_opensource_healthd-ext/commit/7dbf8ee) healthd-ext: update ucsi power supply list for second USB port
  
  Author: Jishnu Prakash  
  Date: Wed Dec 27 21:16:09 2023 +0530

- [126a741](https://github.com/LineageOS/android_vendor_qcom_opensource_healthd-ext/commit/126a741) Add .gitupstream file
  
  Author: Kevin F. Haggerty  
  Date: Thu Nov 3 07:17:31 2022 -0600


</details>

<details>
<summary><b>vendor/qcom/opensource/interfaces</b></summary>

- [c29cd1d](https://github.com/LineageOS/android_vendor_qcom_opensource_interfaces/commit/c29cd1d) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jun 16 15:57:25 2022 +0530


</details>

<details>
<summary><b>vendor/qcom/opensource/power</b></summary>

- [95f4c72](https://github.com/LineageOS/android_vendor_qcom_opensource_power/commit/95f4c72) Merge tag &#x27;LA.VENDOR.15.4.0.r1-17900-pakala.0&#x27; of https://git.codelinaro.org/clo/la/platform/vendor/qcom-opensource/power into HEAD
  
  Author: Bruno Martins  
  Date: Fri Jul 4 02:07:13 2025 +0100

- [f757b78](https://github.com/LineageOS/android_vendor_qcom_opensource_power/commit/f757b78) power: Support MODE_EXT and SET_INTERACTIVE_EXT as external modules
  
  Author: Bruno Martins  
  Date: Mon Jun 9 17:57:59 2025 +0100


</details>

<details>
<summary><b>vendor/qcom/opensource/usb</b></summary>

- [015e083](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/015e083) init.qcom.usb.rc: Set NCM interface name
  
  Author: Yumi Yukimura  
  Date: Thu Apr 24 17:02:48 2025 +0800

- [9dcac7a](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/9dcac7a) usb: Add interface specifiers to USB/USB gadget services
  
  Author: Luca Stefani  
  Date: Thu Feb 23 20:14:49 2023 +0100

- [aa5b14f](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/aa5b14f) usb: Use DFP/UFP mode for non-power role source/sink
  
  Author: Vivekachooz  
  Date: Sun Nov 10 20:55:21 2024 +0100

- [48e7652](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/48e7652) usb: Set permissions for common USB toggle paths
  
  Author: LuK1337  
  Date: Thu Oct 24 14:53:40 2024 +0200

- [a7e6f26](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/a7e6f26) hal: Make it build with -Werror
  
  Author: Michael Bestas  
  Date: Thu Sep 26 04:15:35 2024 +0300

- [f418e81](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/f418e81) usb: Add support for SEC specific enableUsbData path
  
  Author: LuK1337  
  Date: Fri Apr 1 23:58:14 2022 +0200

- [54d0189](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/54d0189) usb: Fall back to old enableUsbData paths
  
  Author: Michael Bestas  
  Date: Sun Sep 22 14:03:38 2024 +0300

- [5a959e0](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/5a959e0) USBGadgetHAL: Set vid, pid for basic functions if exist in usb_compositions.conf
  
  Author: Luofan Chen  
  Date: Sat Aug 3 15:16:17 2024 +0000

- [ebbd6d0](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/ebbd6d0) USBGadgetHAL: Add support for UVC function
  
  Author: Yumi Yukimura  
  Date: Mon Jun 24 22:26:38 2024 +0800

- [762f846](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/762f846) init.qcom.usb.rc: Add support for DeviceAsWebcam feature
  
  Author: Yumi Yukimura  
  Date: Mon Jun 24 15:30:10 2024 +0800

- [7bff0e5](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/7bff0e5) USB: Advertise as sink when audio accessory is connected
  
  Author: Adithya R  
  Date: Sun Jan 1 17:14:09 2023 +0000

- [a881dbe](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/a881dbe) USB: Use SW path for QDSS over USB
  
  Author: Ke Du  
  Date: Mon Dec 25 17:45:20 2023 +0800

- [d01a876](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/d01a876) trinket: usb use bam2bam hw path
  
  Author: Ke Du  
  Date: Tue Sep 19 11:46:05 2023 +0800

- [27f88fc](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/27f88fc) init.qcom.usb.rc: Add 60fps support for uvc resolutions
  
  Author: Akash Kumar  
  Date: Tue Oct 31 14:28:19 2023 +0530

- [266c245](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/266c245) init.qcom.usb.rc: Extend UVC resolutions
  
  Author: Akash Kumar  
  Date: Fri Jul 28 12:35:00 2023 +0530

- [4fea73c](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/4fea73c) usb: Set ro property to determine usb parent node
  
  Author: Akash Kumar  
  Date: Mon Aug 14 18:10:08 2023 +0530

- [c5d926a](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/c5d926a) usb: Enable USB configurations for trinket
  
  Author: Ke Du  
  Date: Thu Jul 20 13:43:20 2023 +0530

- [5d39092](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/5d39092) USB: Enable USBGadget HAL for Crow
  
  Author: Uttkarsh Aggarwal  
  Date: Mon Jul 3 14:22:05 2023 +0530

- [a14af20](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/a14af20) USB: Use SW path for QDSS over USB
  
  Author: Uttkarsh Aggarwal  
  Date: Wed May 31 10:19:47 2023 +0530

- [7b78b47](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/7b78b47) init.qcom.usb.rc: Extend UVC resolutions
  
  Author: AKASH KUMAR  
  Date: Wed Apr 12 12:30:03 2023 +0530

- [f312d89](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/f312d89) init.qcom.usb.rc: set uac sync support for capture
  
  Author: AKASH KUMAR  
  Date: Fri May 12 12:39:47 2023 +0530

- [f6c6a78](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/f6c6a78) usb: Enable USB configurations for kona
  
  Author: Santhosh Kumar Marikukala  
  Date: Tue Apr 4 11:56:36 2023 +0530

- [f43ea38](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/f43ea38) usb: Set ro property to determine usb parent node
  
  Author: AKASH KUMAR  
  Date: Wed Feb 15 17:26:57 2023 +0530

- [55fb4dd](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/55fb4dd) init.qcom.usb.rc: Add support for UAC1 related compositions
  
  Author: AKASH KUMAR  
  Date: Wed Feb 1 15:21:13 2023 +0530

- [e5163e5](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/e5163e5) init.qcom.usb.sh: do not set vendor.usb.rndis.func.name on Anorak
  
  Author: Linyu Yuan  
  Date: Tue Nov 1 14:29:15 2022 +0800

- [e166174](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/e166174) usb: Enable USB configurations for bengal
  
  Author: Himanshu Agrawal  
  Date: Wed Jun 22 11:45:12 2022 +0530

- [6873fb5](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/6873fb5) USB: Enable USB Gadget HAL for Anorak
  
  Author: Uttkarsh Aggarwal  
  Date: Fri Aug 12 18:46:10 2022 +0530

- [f7f4a08](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/f7f4a08) init.qcom.usb.rc: Add support for diag_cnss comp for non IPA targets
  
  Author: Krishna Kurapati  
  Date: Mon May 23 19:53:24 2022 +0530

- [7551a7f](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/7551a7f) USB: Use SW path for QDSS over USB
  
  Author: Prashanth K  
  Date: Thu Apr 14 16:11:16 2022 +0530

- [f32b83a](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/f32b83a) USB: Enable USBGadget HAL for Neo
  
  Author: Krishna Kurapati  
  Date: Wed Mar 16 11:07:48 2022 +0530

- [4c587de](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/4c587de) USB: Use USB QDSS data over SW path on Neo
  
  Author: Krishna Kurapati  
  Date: Sun Mar 20 01:30:50 2022 +0530

- [9d91a15](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/9d91a15) USB: Configure Diag MDM instance on 90D9
  
  Author: Harsh Agarwal  
  Date: Tue May 25 11:32:17 2021 +0530

- [d012f26](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/d012f26) usb: Set the USB model to something more device specific
  
  Author: Alexander Koskovich  
  Date: Wed Mar 2 13:22:16 2022 -0700

- [bf927ea](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/bf927ea) init.qcom.usb.rc: Don&#x27;t apply persist.vendor.usb.config
  
  Author: dianlujitao  
  Date: Sun Oct 3 10:45:31 2021 +0200

- [871d058](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/871d058) usb: Add USB Soong namespace to product makefile.
  
  Author: Alexander Koskovich  
  Date: Sat Aug 21 18:55:29 2021 -0700

- [bbeadb9](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/bbeadb9) Add soong namespace for init scripts
  
  Author: Michael Bestas  
  Date: Sat Sep 26 02:26:57 2020 +0300

- [6820e12](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/6820e12) Merge tag &#x27;LA.VENDOR.14.3.0.r1-21600-lanai.QSSI15.0&#x27; of https://git.codelinaro.org/clo/la/platform/vendor/qcom-opensource/usb into lineage-23.0
  
  Author: Michael Bestas  
  Date: Sat Jul 5 13:24:48 2025 +0300

- [328c0f0](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/328c0f0) USB: Correct Indentation Styles
  
  Author: Rajashekar kuruva  
  Date: Fri Nov 29 23:36:29 2024 +0530

- [9193410](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/9193410) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jun 16 15:57:25 2022 +0530


</details>

<details>
<summary><b>vendor/qcom/opensource/vibrator</b></summary>

- [0bbb1f0](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/0bbb1f0) vibrator: automatically detect supported effects
  
  Author: Cosmin Tanislav  
  Date: Sun Mar 2 22:59:16 2025 +0200

- [3a4e3af](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/3a4e3af) vibrator: Hook USE_EFFECT_STREAM up
  
  Author: Arian  
  Date: Thu Feb 24 18:40:09 2022 +0100

- [8693456](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/8693456) vibrator: add effect header library
  
  Author: Cosmin Tanislav  
  Date: Sun Mar 2 19:37:43 2025 +0200

- [3d9a917](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/3d9a917) vibrator: Remove HapticsPolicy.xml prebuilt_etc package
  
  Author: Michael Bestas  
  Date: Thu Jul 10 10:31:47 2025 +0300

- [653b4a4](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/653b4a4) vibrator: effect: fix -Wreorder-init-list
  
  Author: Cosmin Tanislav  
  Date: Sun Mar 2 19:33:07 2025 +0200

- [7598dbd](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/7598dbd) vibrator: Fix misleading indentation
  
  Author: Michael Bestas  
  Date: Tue Jan 2 19:29:16 2024 +0200

- [e95b4d7](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/e95b4d7) vibrator: Add support for drv2624:haptics
  
  Author: Richard Raya  
  Date: Tue Jun 27 23:58:26 2023 -0300

- [4a66464](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/4a66464) vibrator: Add support for awinic_haptic input device
  
  Author: TheStrechh  
  Date: Sun Nov 26 03:35:03 2023 +0530

- [b568990](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/b568990) vibrator: Add support for aw8695_haptic input device
  
  Author: Michael Bestas  
  Date: Thu May 18 23:32:50 2023 +0300

- [e9f678b](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/e9f678b) vibrator: Add support for aw8697_haptic input device
  
  Author: Arian  
  Date: Mon May 15 10:33:46 2023 +0200

- [de41ff8](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/de41ff8) vibrator: Add support for aw8624_haptic input device
  
  Author: Arian  
  Date: Mon May 15 10:32:53 2023 +0200

- [2bbb6bb](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/2bbb6bb) vibrator: Use a better check for primitive effects
  
  Author: Adithya R  
  Date: Fri Aug 11 20:31:02 2023 +0530

- [6ae8473](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/6ae8473) vibrator: Don&#x27;t support compose effects if primitive_duration node does not exist
  
  Author: Arian  
  Date: Mon May 15 23:02:26 2023 +0200

- [4df0bcb](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/4df0bcb) vibrator: bail out in setAmplitude if gain control is not supported
  
  Author: Fenglin Wu  
  Date: Tue Aug 29 19:02:06 2023 +0800

- [33c6e18](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/33c6e18) Vibrator: Fix check for no of bytes in Co-proc SSR monitor thread
  
  Author: Umang Chheda  
  Date: Mon Feb 7 15:56:22 2022 +0530

- [1e39d59](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/1e39d59) Vibrator: free memory when offload pattern failed
  
  Author: Hui Liu  
  Date: Mon Jul 4 16:43:57 2022 +0800

- [5d64fb3](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/5d64fb3) Vibrator: Remove CAP_PERFORM_CALLBACK Flag for Vibrator
  
  Author: Ashish Chavan  
  Date: Tue Mar 15 17:07:12 2022 +0530

- [3daeb61](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/3daeb61) aidl: Simplify soc check and drop prop dep
  
  Author: Pig  
  Date: Sun Sep 20 12:45:49 2020 +0800

- [061ee89](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/061ee89) Vibrator: add support for waipio 4G variant
  
  Author: Jishnu Prakash  
  Date: Mon Jan 3 15:52:59 2022 +0530

- [9cc84ac](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/9cc84ac) Vibrator: add support for cape
  
  Author: Jishnu Prakash  
  Date: Wed Oct 20 21:41:33 2021 +0530

- [34f2447](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/34f2447) vibrator: restore external control for old chipsets
  
  Author: Michael Bestas  
  Date: Sun Sep 22 14:36:40 2024 +0300

- [b6fdc1f](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/b6fdc1f) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jun 16 15:57:25 2022 +0530


</details>

<details>
<summary><b>lineage/hudson</b></summary>

- [034ffcd](https://github.com/LineageOS/hudson/commit/034ffcd) One spicy pillow later, we&#x27;re so back
  
  Author: Sebastiano Barezzi  
  Date: Thu Jul 3 04:29:30 2025 +0200


</details>

<details>
<summary><b>lineage/wiki</b></summary>

- [4a5ada0](https://github.com/LineageOS/lineage_wiki/commit/4a5ada0) wiki: Add peripherals sorting script
  
  Author: LuK1337  
  Date: Fri Jul 4 09:58:38 2025 +0200

- [ebdd875](https://github.com/LineageOS/lineage_wiki/commit/ebdd875) wiki: hudson_sync: Remove unused import
  
  Author: LuK1337  
  Date: Fri Jul 4 09:57:29 2025 +0200

- [967f824](https://github.com/LineageOS/lineage_wiki/commit/967f824) wiki: Sort peripherals according to schema
  
  Author: LuK1337  
  Date: Fri Jul 4 09:57:03 2025 +0200

- [83a6e20](https://github.com/LineageOS/lineage_wiki/commit/83a6e20) wiki: marble: Add 3.5mm jack peripheral
  
  Author: LuK1337  
  Date: Fri Jul 4 09:47:10 2025 +0200

- [3133a82](https://github.com/LineageOS/lineage_wiki/commit/3133a82) wiki: vayu: Change kernel repository
  
  Author: Sebastiano Barezzi  
  Date: Fri Jul 4 01:12:19 2025 +0200

- [bc2a42e](https://github.com/LineageOS/lineage_wiki/commit/bc2a42e) wiki: Resume support for vayu
  
  Author: Sebastiano Barezzi  
  Date: Thu Jul 3 04:26:16 2025 +0200

- [a99dc6b](https://github.com/LineageOS/lineage_wiki/commit/a99dc6b) wiki: Move setup build environment to seperate template
  
  Author: Inhishonor  
  Date: Tue Jul 1 14:40:45 2025 -0700

- [c9305e5](https://github.com/LineageOS/lineage_wiki/commit/c9305e5) wiki: Improve navbar with new links
  
  Author: Inhishonor  
  Date: Tue Jul 1 14:46:57 2025 -0700

- [e7c6d79](https://github.com/LineageOS/lineage_wiki/commit/e7c6d79) contributing_to_apps: Mention that _some_ apps use gradle-generatebp
  
  Author: Luca Stefani  
  Date: Tue Jul 1 17:57:44 2025 +0200

- [048d022](https://github.com/LineageOS/lineage_wiki/commit/048d022) contributing_to_apps: Add DeskClock
  
  Author: Luca Stefani  
  Date: Tue Jul 1 17:57:10 2025 +0200

- [7e06c05](https://github.com/LineageOS/lineage_wiki/commit/7e06c05) contributing_to_apps: Sort apps
  
  Author: Luca Stefani  
  Date: Tue Jul 1 17:54:48 2025 +0200


</details>

<details>
<summary><b>lineage/mirror</b></summary>

- [a8b9372](https://github.com/LineageOS/mirror/commit/a8b9372) Updated to 07-Jul-2025 10:01 UTC
  
  Author: Tim Schumacher  
  Date: Mon Jul 7 12:01:26 2025 +0200

- [1272486](https://github.com/LineageOS/mirror/commit/1272486) Updated lineage-minimal to 06-Jul-2025 10:01 UTC
  
  Author: Tim Schumacher  
  Date: Sun Jul 6 12:01:43 2025 +0200

- [98bb897](https://github.com/LineageOS/mirror/commit/98bb897) Updated to 05-Jul-2025 22:01 UTC
  
  Author: Tim Schumacher  
  Date: Sun Jul 6 00:01:15 2025 +0200


</details>

<details>
<summary><b>lineage/scripts</b></summary>

- [b55311a](https://github.com/LineageOS/scripts/commit/b55311a) add-repo: Support adding remotes
  
  Author: LuK1337  
  Date: Thu Jul 3 15:48:15 2025 +0200


</details>

