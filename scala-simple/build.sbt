lazy val root = (project in file(".")).
  settings(
    commonSettings,
    projectSettings,
    dependenciesSettings,
    compilerSettings
  )

lazy val commonSettings = Seq(
    scalaVersion := "2.13.3",
    organization := "com.github.fburato"
)

lazy val projectSettings = Seq(
  name := "artifactname"
)

lazy val dependenciesSettings = Seq(
  libraryDependencies ++= dependencies
)

lazy val dependencies = Seq(
  "org.typelevel" %% "cats-core" % "2.2.0",
  "org.typelevel" %% "cats-effect" % "2.2.0"
)

lazy val compilerSettings = Seq(
  scalacOptions ++= compilerOptions
)

lazy val compilerOptions = Seq(
  "-encoding", "utf8",
  "-language:implicitConversions",
  "-language:higherKinds",
  "-language:postfixOps",
  "-Ypartial-unification"
)
